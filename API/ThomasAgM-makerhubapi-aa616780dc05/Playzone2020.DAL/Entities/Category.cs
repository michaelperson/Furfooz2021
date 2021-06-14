using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class Category
    {
        public int Id { get; set; }

        public string Name_fr { get; set; }
        public string Name_en { get; set; }
        public string Name_nl { get; set; }

        public bool IsDeleted { get; set; }

        public string PinColor { get; set; }
    }
}
