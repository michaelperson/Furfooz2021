﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Dto.PointOfInterests
{
    public class PointOfInterestsFormDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Name_fr")]
        [Required]
        [MaxLength(50)]
        public string Name_fr { get; set; }

        [JsonProperty("Name_en")]
        [MaxLength(50)]
        public string? Name_en { get; set; }

        [JsonProperty("Name_nl")]
        [MaxLength(50)]
        public string? Name_nl { get; set; }

        [JsonProperty("Description_fr")]
        public string? Description_fr { get; set; }
        [JsonProperty("Description_en")]
        public string? Description_en { get; set; }
        [JsonProperty("Description_nl")]
        public string? Description_nl { get; set; }

        [JsonProperty("IsDeleted")]
        [Required]
        public bool? IsDeleted { get; set; }

        [JsonProperty("Category_id")]
        [Required]
        public int Category_id { get; set; }

        [JsonProperty("Image")]
        public byte[]? Image { get; set; }
        [JsonProperty("MimeType")]
        public string? MimeType { get; set; }
        [JsonProperty("ImageUrl")]
        public string? ImageUrl { get; set; }

        [JsonProperty("Latitude")]
        public double? Latitude { get; set; }
        [JsonProperty("Longitude")]
        public double? Longitude { get; set; }

        [JsonProperty("Interval")]
        public double? Interval { get; set; }

        [JsonProperty("StartDate")]
        public DateTime? StartDate { get; set; }
        [JsonProperty("EndDate")]
        public DateTime? EndDate { get; set; }
        [JsonProperty("Camera_Id")]
        public int? Camera_Id { get; set; }
    }
}
