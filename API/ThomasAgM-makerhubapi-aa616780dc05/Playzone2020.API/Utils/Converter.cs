using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Utils
{
    public class Converter
    {
        public static string ImageToByte2(Bitmap img)
        {
            using (var stream = new MemoryStream())
            {
                img.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
                return "data:image/png; base64," + System.Convert.ToBase64String(stream.ToArray());
            }
        }
    }
}
