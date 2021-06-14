using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Reservation
{
    public class BookingDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Date")]
        public DateTime Date { get; set; }

        [JsonProperty("Hour")]
        public int Hour { get; set; }

        [JsonProperty("Minute")]
        public int Minute { get; set; }

        [JsonProperty("NbAdults")]
        public int NbAdults { get; set; }

        [JsonProperty("NbStudents")]
        public int NbStudents { get; set; }

        [JsonProperty("NbKids")]
        public int NbKids { get; set; }

        [JsonProperty("CombinedMosan")]
        public bool CombinedMosan { get; set; }

        [JsonProperty("CombinedVeves")]
        public bool CombinedVeves { get; set; }

        [JsonProperty("WantAGuide")]
        public bool WantAGuide { get; set; }

        [JsonProperty("Reference")]
        public string Reference { get; set; }

        [JsonProperty("Total")]
        public decimal Total { get; set; }

        [JsonProperty("IsCheck")]
        public bool IsCheck { get; set; }

        [JsonProperty("Payed")]
        public bool Payed { get; set; }

        [JsonProperty("MailAdress")]
        public string MailAdress { get; set; }

        [JsonProperty("IdStripe")]
        public string IdStripe { get; set; }

        [JsonProperty("PayementType")]
        public string PayementType { get; set; }

        [JsonProperty("MemberNumber")]
        public int MemberNumber { get; set; }

        [JsonProperty("SendEmail")]
        public bool SendEmail { get; set; }
    }
}
