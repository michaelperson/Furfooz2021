using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto;
using Playzone2020.API.Dto.Reservation;
using Playzone2020.API.helper;
using Playzone2020.API.Mappers;
using Playzone2020.API.Services;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Repositories;
using SelectPdf;
using Stripe.Checkout;

namespace Playzone2020.API.Controllers
{
    public class PdfController : Controller
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private readonly BookingRepository _reservationRepo;
        private readonly ViewRenderService _viewRenderService;
        private readonly MailService _mailService;
        private readonly SessionService _stripe;

        public PdfController(IWebHostEnvironment hostingEnvironment, BookingRepository reservationRepo, ViewRenderService viewRenderService, MailService mailService, SessionService stripe)
        {
            _hostingEnvironment = hostingEnvironment;
            _reservationRepo = reservationRepo;
            _viewRenderService = viewRenderService;
            _mailService = mailService;
            this._stripe = stripe;

        }
        [HttpGet("api/booking/pdf/{reference}")]
        public IActionResult GetPdf(string reference)
        {

            BookingDto dto = _reservationRepo.GetByReference(reference)?.ToDto();

            string v = this.RenderViewAsync<string>("pdf", new TicketDTO
            {
                Reference = reference,
                QRCode = _viewRenderService.CreateQRCode(reference),
                BookingDate = new DateTime(dto.Date.Year, dto.Date.Month, dto.Date.Day, dto.Hour, dto.Minute, 0),
                NbAdult = dto.NbAdults,
                NbKid = dto.NbKids,
                NbStudent = dto.NbStudents,
                Total = (double)dto.Total,
                MailAdress = dto.MailAdress,
                NbMember = dto.MemberNumber,
                CombinedMosan = dto.CombinedMosan,
                CombinedVeves = dto.CombinedVeves
            }).Result;
            HtmlToPdf converter = new HtmlToPdf();

            // set converter options
            converter.Options.PdfPageSize = PdfPageSize.A4;
            converter.Options.PdfPageOrientation = PdfPageOrientation.Portrait;

            // create a new pdf document converting an html string
            PdfDocument doc = converter.ConvertHtmlString(v, "");

            // save pdf document
            byte[] rep = doc.Save();
            return File(rep, "application/pdf");
        }

        [HttpGet("api/image/{nameWithExtension}")]
        public IActionResult GetImage(string nameWithExtension)
        {
            string ext = nameWithExtension.Split(".")[1];
            string webRootPath = _hostingEnvironment.WebRootPath;
            Byte[] b = System.IO.File.ReadAllBytes(@$"{webRootPath}\assets\{nameWithExtension}");
            if (ext == "svg")
            {
                return File(b, "image/svg+xml");
            }
            else
            {
                return File(b, $"image/{ext}");
            }
        }

        [HttpGet("api/booking/mail/{reference}")]
        public IActionResult SendMail(string reference)
        {
            try
            {
                BookingDto dto = _reservationRepo.GetByReference(reference)?.ToDto();

                string v = this.RenderViewAsync<string>("pdf", new TicketDTO
                {
                    Reference = reference,
                    QRCode = _viewRenderService.CreateQRCode(reference),
                    BookingDate = new DateTime(dto.Date.Year, dto.Date.Month, dto.Date.Day, dto.Hour, dto.Minute, 0),
                    NbAdult = dto.NbAdults,
                    NbKid = dto.NbKids,
                    NbStudent = dto.NbStudents,
                    Total = (double)dto.Total,
                    MailAdress = dto.MailAdress,
                    NbMember = dto.MemberNumber,
                    CombinedMosan = dto.CombinedMosan,
                    CombinedVeves = dto.CombinedVeves
                }).Result;

                _mailService.SendMail(dto.MailAdress, v, reference);

                return Ok();
            }
            catch (Exception e)
            {
                return Problem("Unknown error");
            }
        }

        [HttpGet("api/booking/stripe/{Ref}")]
        public IActionResult GetStripeByReference(string Ref)
        {
            // get in database
            Booking booking = _reservationRepo.GetByReference(Ref);

            if (booking == null)
            {
                return NotFound();
            }

            if (booking.IdStripe == null) return NotFound();

            Session session = _stripe.Get(booking.IdStripe);

            booking.MailAdress = session.CustomerEmail;
            booking.PayementType = "stripe";

            BookingDto book = booking.ToDto();

            book.Payed = session.PaymentStatus == "paid";

            if (book.Payed && !book.SendEmail)
            {
                // send email 
                book.SendEmail = true;
                booking.SendEmail = true;
                // Update in database
                _reservationRepo.Update(booking);

                SendMail(booking.Reference);
            }

            return Ok(book);
        }
    }
}
