using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using Playzone2020.API.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Playzone2020.API.Filters
{
    public class ApiAuthorize : Attribute, IAuthorizationFilter
    {
        private string[] roles;

        public ApiAuthorize(params string[] roles)
        {
            this.roles = roles;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            context.HttpContext.Request.Headers.TryGetValue("Authorization", out StringValues values);

            string token = values.FirstOrDefault(h => h.StartsWith("Bearer "))?.Replace("Bearer ", "");

            if (token == null)
            {
                context.Result = new UnauthorizedResult();
            }
            else
            {
                JwtService service = (JwtService)context.HttpContext.RequestServices.GetService(typeof(JwtService));
                ClaimsPrincipal claims = service.Decode(token);
                if (claims == null)
                {
                    context.Result = new UnauthorizedResult();
                }
                else
                {
                    foreach (string role in roles)
                    {
                        if (claims.IsInRole(role))
                        {
                            context.HttpContext.User = claims;
                            return;
                        }
                    }
                    context.Result = new UnauthorizedResult();
                }
            }

        }
    }
}
