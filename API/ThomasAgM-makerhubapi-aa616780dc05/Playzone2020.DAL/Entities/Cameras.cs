using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class Cameras
    {
        public int Id { get; set; }
        public string Nom_Fr { get; set; }
        public string Nom_Nl { get; set; }
        public string Nom_En { get; set; }

        public string Emplacement { get; set; }
        public bool EstActif { get; set; }

        public string LienImg { get; set; }

    }
}

