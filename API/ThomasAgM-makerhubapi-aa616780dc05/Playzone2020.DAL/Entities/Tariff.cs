using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class Tariff
    {
        public int Id { get; set; }
        public string TicketType { get; set; }
        public double FurfoozPrice { get; set; }
        public double FurfoozReducedPrice { get; set; }
        public double VevesPrice { get; set; }
        public double VevesReducedPrice { get; set; }
        public double MosanPrice { get; set; }
        public double MosanReducedPrice { get; set; }
    }
}
