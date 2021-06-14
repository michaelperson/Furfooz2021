using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto
{
    public class TicketDTO
    {
        public string Reference { get; set; }
        public string QRCode { get; set; }
        public DateTime BookingDate { get; set; }
        public int NbAdult { get; set; }
        public int NbKid { get; set; }
        public int NbStudent { get; set; }
        public double Total { get; set; }
        public string MailAdress { get; set; }
        public int NbMember { get; set; }
        public bool CombinedMosan { get; set; }
        public bool CombinedVeves { get; set; }
    }
}
