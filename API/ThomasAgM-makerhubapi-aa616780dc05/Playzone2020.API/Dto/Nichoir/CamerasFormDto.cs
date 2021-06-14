using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Nichoir
{
    public class CamerasFormDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Nom_Fr")]
        [Required]
        [MaxLength(50)]
        public string Nom_Fr { get; set; }

        [JsonProperty("Nom_En")]
        [Required]
        [MaxLength(50)]
        public string Nom_En { get; set; }

        [JsonProperty("Nom_Nl")]
        [Required]
        [MaxLength(50)]
        public string Nom_Nl { get; set; }

        [JsonProperty("Emplacement")]
        [Required]
        public string Emplacement { get; set; }

        [JsonProperty("EstActif")]
        [Required]
        public bool EstActif { get; set; }


        [JsonProperty("LienImg")]
        [Required]
        public string LienImg { get; set; }

    }
}
