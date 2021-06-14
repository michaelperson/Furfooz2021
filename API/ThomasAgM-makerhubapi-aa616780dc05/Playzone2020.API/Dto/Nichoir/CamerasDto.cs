using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Nichoir
{
    public class CamerasDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Nom_Fr")]
        public string Nom_Fr { get; set; }

        [JsonProperty("Nom_En")]
        public string Nom_En { get; set; }

        [JsonProperty("Nom_Nl")]
        public string Nom_Nl { get; set; }

        [JsonProperty("Emplacement")]
        public string Emplacement { get; set; }

        [JsonProperty("EstActif")]
        public bool EstActif { get; set; }

        [JsonProperty("LienImg")]
        public string LienImg { get; set; }

    }
}
