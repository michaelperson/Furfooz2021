using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Security;
using Playzone2020.API.services;

namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private SecurityService security;

        public SecurityController(SecurityService security)
        {
            this.security = security;
        }

        [HttpPost("login")]
        [Produces("application/json", Type = typeof(string))]
        public IActionResult Login(LoginDto dto)
        {
            try
            {
                string token = security.Login(dto);
                if (token != null)
                    return Ok(token);
                else
                    return BadRequest("Données incorrect");
            }
            catch (Exception e)
            {
                return StatusCode(500, "Une erreur inattendue, veuillez contacter votre technicien");
            }
        }
    }
}
