using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Category
{
    public class CategoryDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Name_fr")]
        public string Name_fr { get; set; }

        [JsonProperty("Name_en")]
        public string Name_en { get; set; }

        [JsonProperty("Name_nl")]
        public string Name_nl { get; set; }

        [JsonProperty("IsDeleted")]
        public bool IsDeleted { get; set; }

        [JsonProperty("PinColor")]
        public string PinColor { get; set; }
    }
}
