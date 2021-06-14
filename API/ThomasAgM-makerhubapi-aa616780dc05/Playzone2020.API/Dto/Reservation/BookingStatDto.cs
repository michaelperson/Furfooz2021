using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Reservation
{
    public class BookingStatDto
    {
        public string Periodicity { get; set; }
        public int Year { get; set; }
        public int? Month { get; set; }
        public int? Day { get; set; }
        public int? WeekOfYear { get; set; }
        public double Amount { get; set; }
        public int Affluence { get; set; }
        public int TicketCount { get; set; }
        public string Label { get; set; }
    }
}
