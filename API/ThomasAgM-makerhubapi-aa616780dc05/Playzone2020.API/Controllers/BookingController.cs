using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto;
using Playzone2020.API.Dto.Reservation;
using Playzone2020.API.Mappers;
using Playzone2020.API.Services;
using Playzone2020.DAL.Repositories;

using Playzone2020.API.Resources;
using Stripe.Checkout;
using Playzone2020.DAL.Entities;
using Microsoft.AspNetCore.Hosting;

namespace Playzone2020.API.Controllers
{
    [Route("api/booking")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly BookingRepository _reservationRepo;
        private readonly ViewRenderService viewRenderService;
        
        private readonly SessionService _stripe;
        private readonly IWebHostEnvironment _hostingEnvironment;
        public BookingController(BookingRepository reservationRepo, ViewRenderService viewRenderService, SessionService stripe, IWebHostEnvironment hostingEnvironment)
        {
            this._reservationRepo = reservationRepo;
            this.viewRenderService = viewRenderService;
            this._stripe = stripe;
            _hostingEnvironment = hostingEnvironment;
        }

        //[HttpGet]
        //public IActionResult Get()
        //{
        //    try
        //    {
        //        return Ok(_reservationRepo.Get().Select(x => x.ToDto()).Select(y =>
        //        {
        //            if(y.IdStripe != null)
        //            {
        //                y.Payed = _stripe.Get(y.IdStripe).PaymentStatus == "paid";
        //            }

        //            return y;
        //        }));
        //    }
        //    catch (Exception)
        //    {

        //        return Problem("Unknown Error");
        //    }
        //}

        [HttpGet]
        public IActionResult Get(int offset, int limit)
        {
            try
            {
                return Ok(_reservationRepo.Get(offset, limit).Select(x => x.ToDto()).Select(y =>
                {
                    if (y.IdStripe != null)
                    {
                        y.Payed = _stripe.Get(y.IdStripe).PaymentStatus == "paid";
                    }

                    return y;
                }));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                BookingDto dto = _reservationRepo.Get(id)?.ToDto();
                if (dto == null)
                {
                    return NotFound();
                }
                if(dto.IdStripe != null)
                {
                    dto.Payed = _stripe.Get(dto.IdStripe).PaymentStatus == "paid";
                }
                return Ok(dto);
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpGet("count")]
        public IActionResult GetCount()
        {
            try
            {
                int count = _reservationRepo.GetCount();
                return Ok(count);
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }

        [HttpGet("mailadress/{mailadress}")]
        public IActionResult GetByMailAdress(string mailadress)
        {
            try
            {
                return Ok(_reservationRepo.GetByMailAdress(mailadress).Select(x => x.ToDto()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut("check/{id}")]
        public IActionResult Update(int id)
        {
            try
            {
                _reservationRepo.CheckById(id);
                return Ok(_reservationRepo.Get(id).ToDto());
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }

        [HttpGet("reference/{reference}")]
        public IActionResult GetByReference(string reference)
        {
            try
            {
                BookingDto dto = _reservationRepo.GetByReference(reference)?.ToDto();
                if (dto == null)
                {
                    return NotFound();
                }
                return Ok(dto);
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        //[HttpGet("mail/{reference}")]
        //public IActionResult Send(string reference, string mail)
        //{
        //    try
        //    {
        //        BookingDto dto = _reservationRepo.GetByReference(reference)?.ToDto();
        //        if (dto == null)
        //        {
        //            return NotFound();
        //        }
        //        string htmlData = viewRenderService
        //            .RenderToString("~/Views/PDF/pdf.cshtml", new TicketDTO { Reference = reference, QRCode = viewRenderService.CreateQRCode(reference), BookingDate = new DateTime(dto.Date.Year, dto.Date.Month, dto.Date.Day, dto.Hour, dto.Minute, 0), NbAdult = dto.NbAdults, NbKid = dto.NbKids, NbStudent = dto.NbStudents, Total = (double)dto.Total });
        //        byte[] bytes = pdfService.GetPDF(htmlData);
                
        //        return File(bytes, "application/pdf");
        //    }
        //    catch (Exception)
        //    {
        //        return Problem("Unknown Error");
        //    }
        //}

        [HttpGet("{date}/{hour}/{minute}")]
        public IActionResult GetTotalByDate(string date, int hour, int minute)
        {
            try
            {
                int total = _reservationRepo.GetTotalByDate(date, hour, minute);
                return Ok(total);
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }


        [HttpGet("hours2/{date}")]
        public IActionResult GetHoursByDate2(string date)
        {
            try
            {
                IEnumerable<(string,int)> result = _reservationRepo.GetHoursByDate2(date);
                return Ok(result);
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }


        [HttpGet("hours/{date}")]
        public IActionResult GetHoursByDate(string date)
        {
            try
            {
                IEnumerable<string> result = _reservationRepo.GetHoursByDate(date);
                return Ok(result);
            }
            catch (Exception)
            {
            return Problem("Unknown Error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                return Ok(_reservationRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(BookingFormDto dto)
        {
            try
            {
                _reservationRepo.Update(dto.ToEntity());
                return Ok(_reservationRepo.Get(dto.Id).ToDto());
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }

        [HttpPost]
        public IActionResult Post(BookingFormDto dto)
        {
            try
            {
                dto.Reference = Guid.NewGuid().ToString();
                return Ok(_reservationRepo.Insert(dto.ToEntity()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }


        // STRIPE

        [HttpPost("stripe")]
        public IActionResult PostWithStripe(BookingFormDto booking)
        {
            try
            {
                SessionCreateOptions options = new SessionCreateOptions
                {
                    SuccessUrl = "https://playzone2020-ed6a5.web.app/finalize.html",
                    CancelUrl = "https://playzone2020-ed6a5.web.app/",
                    PaymentMethodTypes = new List<string>
                    {
                        "card", "bancontact"
                    },
                    CustomerEmail = booking.MailAdress,
                    LineItems = new List<SessionLineItemOptions>
                    {
                        new SessionLineItemOptions
                        {
                            Name = "price_1HwmM6C08ktCk09B08ewgND7",
                            Quantity = 1,
                            Currency = "eur",
                            Amount = (long)(booking.Total * 100)
                        },
                    },
                    Mode = "payment",
                };

                Session session = _stripe.Create(options);

                booking.IdStripe = session.Id;
                booking.Reference = Guid.NewGuid().ToString();

                //save booking in database
                _reservationRepo.Insert(booking.ToEntity());
                return Ok(new { Reference = booking.Reference, stripeId = session.Id });
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("qrcode/{reference}")]
        public IActionResult GetQrCode(string reference)
        {
            return File(viewRenderService.CreateQRCodeBytes(reference), "image/png");
        }

        [HttpGet("stats")]
        public IActionResult GetStats(
            [FromQuery]DateTime startDate,
            [FromQuery]DateTime endDate,
            [FromQuery]string periodicity = "daily"
        )
        {
            try
            {
                return Ok(_reservationRepo.GetBetweenDate(startDate, endDate).ToStatDto(periodicity));
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
