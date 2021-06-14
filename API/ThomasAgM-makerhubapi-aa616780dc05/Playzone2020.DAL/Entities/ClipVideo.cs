using System;
using System.Collections.Generic;
using System.Text;

namespace Playzone2020.DAL.Entities
{
    public class ClipVideo
    {
        public int Id { get; set; }
        public string Lien { get; set; }
        public string Nom_Fr { get; set; }
        public string Nom_Nl { get; set; }
        public string Nom_En { get; set; }

        public string Detail { get; set; }
        public bool EstAffiche { get; set; }
        public string LienImg { get; set; }
        public int Camera_Id { get; set; }
        

    }
}
