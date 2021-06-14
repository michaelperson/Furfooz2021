using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Parameter
{
    public class ParameterFormDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("ParameterName")]
        [Required]
        [MaxLength(50)]
        public string ParameterName { get; set; }

        [JsonProperty("Value")]
        [MaxLength(50)]
        public string Value { get; set; }
    }
}
