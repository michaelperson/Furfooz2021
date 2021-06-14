using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Parameter
{
    public class ParameterDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("ParameterName")]
        public string ParameterName { get; set; }

        [JsonProperty("Value")]
        public string Value { get; set; }
    }
}
