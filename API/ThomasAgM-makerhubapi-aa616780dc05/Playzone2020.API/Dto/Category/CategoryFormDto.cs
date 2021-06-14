using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Category
{
    public class CategoryFormDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Name_fr")]
        [Required]
        [MaxLength(50)]
        public string Name_fr { get; set; }

        [JsonProperty("Name_en")]
        [MaxLength(50)]
        public string Name_en { get; set; }

        [JsonProperty("Name_nl")]
        [MaxLength(50)]
        public string Name_nl { get; set; }

        [JsonProperty("IsDeleted")]
        [Required]
        public bool IsDeleted { get; set; }

        [JsonProperty("PinColor")]
        [Required]
        [MaxLength(50)]
        public string PinColor { get; set; }
    }
}
