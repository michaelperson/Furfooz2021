using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Tariff;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Playzone2020.API.Controllers
{
    [Route("api/tarif")]
    [ApiController]
    public class TariffController : ControllerBase
    {
        private readonly TariffRepository _tariffRepo;

        public TariffController(TariffRepository tariffRepo)
        {
            this._tariffRepo = tariffRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_tariffRepo.Get().Select(x => x.ToDto()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                TariffDto dto = _tariffRepo.Get(id)?.ToDto();
                if (dto == null)
                {
                    return NotFound();
                }
                return Ok(dto);
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                return Ok(_tariffRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(TariffFormDto dto)
        {
            try
            {
                return Ok(_tariffRepo.Update(dto.ToEntity()));
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }

        [HttpPost]
        public IActionResult Post(TariffFormDto dto)
        {
            try
            {
                return Ok(_tariffRepo.Insert(dto.ToEntity()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }
    }
}