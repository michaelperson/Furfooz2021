using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class Plant
    {
        public int Id { get; set; }

        public string Name_fr { get; set; }
        public string Name_en { get; set; }
        public string Name_nl { get; set; }
        public string Name_la { get; set; }

        public string Description1_fr { get; set; }
        public string Description1_en { get; set; }
        public string Description1_nl { get; set; }

        public string Description2_fr { get; set; }
        public string Description2_en { get; set; }
        public string Description2_nl { get; set; }

        public string Description3_fr { get; set; }
        public string Description3_en { get; set; }
        public string Description3_nl { get; set; }

        public bool IsDeleted { get; set; }

        public int CategoryPlant_id { get; set; }

        public byte[] Image { get; set; }
        public string MimeTypeImage { get; set; }

        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        //public byte[] Audio { get; set; }
        //public string MimeTypeAudio { get; set; }
        //public double? Interval { get; set; }

        //public DateTime? StartDate { get; set; }
        //public DateTime? EndDate { get; set; }
        public int Seasons { get; set; }

    }

}
