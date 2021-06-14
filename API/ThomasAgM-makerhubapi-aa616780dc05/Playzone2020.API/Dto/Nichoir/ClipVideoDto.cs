using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Nichoir
{
    public class ClipVideoDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Lien")]
        public string Lien { get; set; }

        [JsonProperty("Nom_Fr")]
        public string Nom_Fr { get; set; }

        [JsonProperty("Nom_En")]
        public string Nom_En { get; set; }

        [JsonProperty("Nom_Nl")]
        public string Nom_Nl { get; set; }

        [JsonProperty("Detail")]
        public string Detail { get; set; }

        [JsonProperty("EstAffiche")]
        public bool EstAffiche { get; set; }

        [JsonProperty("LienImg")]
        public string LienImg { get; set; }

        [JsonProperty("Camera_Id")]
        public int Camera_Id { get; set; }
    }
}
