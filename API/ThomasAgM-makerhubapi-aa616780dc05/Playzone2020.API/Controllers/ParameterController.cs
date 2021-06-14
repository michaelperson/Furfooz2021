using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Parameter;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Repositories;

namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParameterController : ControllerBase
    {
        private readonly ParameterRepository _parameterRepo;

        public ParameterController(ParameterRepository parameterRepo)
        {
            this._parameterRepo = parameterRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_parameterRepo.Get().Select(x => x.ToDto()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(ParameterFormDto dto)
        {
            try
            {
                return Ok(_parameterRepo.Update(dto.ToEntity()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }
    }
}
