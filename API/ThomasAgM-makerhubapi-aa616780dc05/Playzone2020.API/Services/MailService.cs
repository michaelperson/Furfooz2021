using SelectPdf;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace Playzone2020.API.Services
{
    public class MailService
    {
        public MailService()
        {
        }
        public void SendMail(string mail, string body, string reference)
        {
            using (var stream = new MemoryStream())
            using (var writer = new StreamWriter(stream))
            using (SmtpClient smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                Credentials = new NetworkCredential("ToDauwSite@gmail.com", "ToD@uw1215")
            })
            using (MailMessage mm = new MailMessage("ToDauwSite@gmail.com", mail)
            {
                Subject = "Votre Ticket Furfooz : ",
                IsBodyHtml = true,
                Body = "<h1>Merci pour votre réservation.</h1>" +
                "<p>Vous trouverez en pièce jointe votre ticket.</p>" +
                "<p>Bonne journée.</p>" +
                "<p>L'équipe du parc de Furfooz.</p>"


            })
            {
                HtmlToPdf _htmlToPdf = new HtmlToPdf();
                PdfDocument doc = _htmlToPdf.ConvertHtmlString(body);
                doc.Save(stream);

                stream.Position = 0;

                mm.Attachments.Add(new Attachment(stream, "Voucher - " + reference + ".pdf"));

                smtp.Send(mm);
            }
        }
    }
}
