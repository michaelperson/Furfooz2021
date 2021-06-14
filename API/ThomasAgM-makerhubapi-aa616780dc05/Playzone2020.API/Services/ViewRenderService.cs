using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Routing;
using QRCoder;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Services
{
    public class ViewRenderService
    {
        private readonly IRazorViewEngine razorViewEngine;
        private readonly ITempDataProvider tempDataProvider;
        private readonly IServiceProvider serviceProvider;

        public ViewRenderService(IRazorViewEngine razorViewEngine, ITempDataProvider tempDataProvider, IServiceProvider serviceProvider)
        {
            this.razorViewEngine = razorViewEngine;
            this.tempDataProvider = tempDataProvider;
            this.serviceProvider = serviceProvider;
        }


        public string RenderToString(string viewName, object model)
        {
            var httpContext = new DefaultHttpContext { RequestServices = serviceProvider };
            var actionContext = new ActionContext(httpContext, new RouteData(), new ActionDescriptor());

            using (var sw = new StringWriter())
            {
                var viewResult = razorViewEngine.GetView(null, viewName, false);

                if (viewResult.View == null)
                {
                    throw new ArgumentNullException($"{viewName} does not match any available view");
                }

                var viewDictionary =
                    new ViewDataDictionary(
                        new EmptyModelMetadataProvider(),
                        new ModelStateDictionary())
                    { Model = model };

                var viewContext = new ViewContext(
                    actionContext,
                    viewResult.View,
                    viewDictionary,
                    new TempDataDictionary(actionContext.HttpContext, tempDataProvider),
                    sw,
                    new HtmlHelperOptions());

                viewResult.View.RenderAsync(viewContext).Wait();
                return sw.ToString();
            }
        }

        public string CreateQRCode(string reference)
        {
            string _qrCodeString;
            using(MemoryStream ms = new MemoryStream())
            {
                QRCodeGenerator _qrGenerator = new QRCodeGenerator();
                QRCodeData _qrCodeData = _qrGenerator.CreateQrCode(reference, QRCodeGenerator.ECCLevel.Q);
                QRCode _qrCode = new QRCode(_qrCodeData);
                using(Bitmap _bitmap = _qrCode.GetGraphic(50))
                {
                    _bitmap.Save(ms, ImageFormat.Png);
                    _qrCodeString = "data:image/png; base64," + Convert.ToBase64String(ms.ToArray());
                }
            }
            return _qrCodeString;
        }

        public byte[] CreateQRCodeBytes(string reference)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                QRCodeGenerator _qrGenerator = new QRCodeGenerator();
                QRCodeData _qrCodeData = _qrGenerator.CreateQrCode(reference, QRCodeGenerator.ECCLevel.Q);
                QRCode _qrCode = new QRCode(_qrCodeData);
                using (Bitmap _bitmap = _qrCode.GetGraphic(50))
                {
                    _bitmap.Save(ms, ImageFormat.Png);
                }
                return ms.ToArray();
            }
        }
    }
}
