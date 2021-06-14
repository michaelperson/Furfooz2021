using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Playzone2020.API.services
{
    public class JwtService
    {
        
        private JwtSecurityTokenHandler handler;

        private string signature;

        public JwtService(JwtSecurityTokenHandler handler, IConfiguration config)
        {
            this.handler = handler;
            signature = config.GetSection("Jwt").GetValue<string>("Signature");
        }

        public string EncodeToken(string user)
        {
            try
            {
                SigningCredentials credentials = new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signature)),
                    SecurityAlgorithms.HmacSha256
                );

                IEnumerable<Claim> claims = new List<Claim> {
                    new Claim(ClaimTypes.Role, "Administrateur"),
                    new Claim(ClaimTypes.Name, user),
                };
                JwtSecurityToken token = new JwtSecurityToken(null, null, claims, null, null, credentials);

                return handler.WriteToken(token);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public ClaimsPrincipal Decode(string token)
        {
            TokenValidationParameters validationParameters = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateLifetime = false,
                RequireSignedTokens = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signature))
            };
            try
            {
                ClaimsPrincipal claims = handler.ValidateToken(token, validationParameters, out SecurityToken securityToken);
                return claims;
            }

            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
