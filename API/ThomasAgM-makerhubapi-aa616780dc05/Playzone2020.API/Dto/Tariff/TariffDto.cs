using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Tariff
{
    public class TariffDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("TicketType")]
        public string TicketType { get; set; }

        [JsonProperty("FurfoozPrice")]
        public double FurfoozPrice { get; set; }

        [JsonProperty("FurfoozReducedPrice")]
        public double FurfoozReducedPrice { get; set; }

        [JsonProperty("VevesPrice")]
        public double VevesPrice { get; set; }

        [JsonProperty("VevesReducedPrice")]
        public double VevesReducedPrice { get; set; }

        [JsonProperty("MosanPrice")]
        public double MosanPrice { get; set; }

        [JsonProperty("MosanReducedPrice")]
        public double MosanReducedPrice { get; set; }
    }
}
