using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Nichoir;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Repositories;


namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CamerasController : ControllerBase
    {
        private readonly CamerasRepository _cameraRepo;
        public CamerasController(CamerasRepository cameraRepo)
        {
            this._cameraRepo = cameraRepo;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_cameraRepo.Get().Select(x => x.ToDto()));
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
                CamerasDto dto = _cameraRepo.Get(id)?.ToDto();
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
                return Ok(_cameraRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(CamerasFormDto dto)
        {
            try
            {
                return Ok(_cameraRepo.Update(dto.ToEntity()));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPost]
        public IActionResult Post(CamerasFormDto dto)
        {
            try
            {
                return Ok(_cameraRepo.Insert(dto.ToEntity()));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }
    }
}
