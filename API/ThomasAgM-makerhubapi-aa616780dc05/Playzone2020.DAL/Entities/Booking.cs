using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Hour { get; set; }
        public int Minute { get; set; }
        public int NbAdults { get; set; }
        public int NbStudents { get; set; }
        public int NbKids { get; set; }
        public bool CombinedMosan { get; set; }
        public bool CombinedVeves { get; set; }
        public bool WantAGuide { get; set; }
        public string Reference { get; set; }
        public decimal Total { get; set; }
        public bool IsCheck { get; set; }
        public string MailAdress { get; set; }
        public string IdStripe { get; set; }
        public string PayementType { get; set; }
        public int MemberNumber { get; set; }
        public bool SendEmail { get; set; }
    }
}
