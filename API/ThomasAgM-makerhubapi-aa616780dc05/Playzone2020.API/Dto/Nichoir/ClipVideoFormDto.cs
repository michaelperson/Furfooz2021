using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.Nichoir
{
    public class ClipVideoFormDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Lien")]
        [Required]
        public string Lien { get; set; }

        [JsonProperty("Nom_Fr")]
        [Required]
        public string Nom_Fr { get; set; }

        [JsonProperty("Nom_En")]
        [Required]
        public string Nom_En { get; set; }

        [JsonProperty("Nom_Nl")]
        [Required]
        public string Nom_Nl { get; set; }

        [JsonProperty("Detail")]
        [Required]
        [MaxLength(50)]
        public string Detail { get; set; }

        [JsonProperty("EstAffiche")]
        [Required]
        public bool EstAffiche { get; set; }

        [JsonProperty("LienImg")]
        [Required]
        public string LienImg { get; set; }

        [JsonProperty("Camera_Id")]
        [Required]
        public int Camera_Id { get; set; }
    }
}
