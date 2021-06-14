using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class PointOfInterests
    {
        public int Id { get; set; }

        public string Name_fr { get; set; }
        public string Name_en { get; set; }
        public string Name_nl { get; set; }

        public string Description_fr { get; set; }
        public string Description_en { get; set; }
        public string Description_nl { get; set; }

        public bool? IsDeleted { get; set; }

        public int Category_id { get; set; }

        public byte[] Image { get; set; }
        public string MimeType { get; set; }

        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        public double? Interval { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public int? Camera_Id { get; set; }
    }
}
