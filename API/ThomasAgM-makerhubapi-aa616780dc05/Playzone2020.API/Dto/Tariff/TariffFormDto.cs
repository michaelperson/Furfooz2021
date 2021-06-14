using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Tariff
{
    public class TariffFormDto
    {
        [JsonProperty("Id")]
        [Required]
        public int Id { get; set; }

        [JsonProperty("TicketType")]
        [Required]
        [MaxLength(50)]
        public string TicketType { get; set; }

        [JsonProperty("FurfoozPrice")]
        [Required]
        public double FurfoozPrice { get; set; }

        [JsonProperty("FurfoozReducedPrice")]
        [Required]
        public double FurfoozReducedPrice { get; set; }

        [JsonProperty("VevesPrice")]
        [Required]
        public double VevesPrice { get; set; }

        [JsonProperty("VevesReducedPrice")]
        [Required]
        public double VevesReducedPrice { get; set; }

        [JsonProperty("MosanPrice")]
        [Required]
        public double MosanPrice { get; set; }

        [JsonProperty("MosanReducedPrice")]
        [Required]
        public double MosanReducedPrice { get; set; }
    }
}
