using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Reservation
{
    public class BookingFormDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Date")]
        [Required]
        public DateTime Date { get; set; }

        [JsonProperty("Hour")]
        public int Hour { get; set; }

        [JsonProperty("Minute")]
        public int Minute { get; set; }

        [JsonProperty("NbAdults")]
        [Required]
        public int NbAdults { get; set; }


        [JsonProperty("NbStudents")]
        [Required]
        public int NbStudents { get; set; }

        [JsonProperty("NbKids")]
        [Required]
        public int NbKids { get; set; }

        [JsonProperty("CombinedMosan")]
        [Required]
        public bool CombinedMosan { get; set; }

        [JsonProperty("CombinedVeves")]
        [Required]
        public bool CombinedVeves { get; set; }

        [JsonProperty("WantAGuide")]
        public bool WantAGuide { get; set; }

        [JsonProperty("Reference")]
        public string Reference { get; set; }

        [JsonProperty("Total")]
        [Required]
        public decimal Total { get; set; }

        [JsonProperty("IsCheck")]
        public bool IsCheck { get; set; }

        [JsonProperty("MailAdress")]
        [Required]
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
