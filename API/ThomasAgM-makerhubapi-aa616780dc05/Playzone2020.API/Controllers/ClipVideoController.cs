using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Nichoir;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Repositories;

namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClipVideoController : ControllerBase
    {
        private readonly ClipVideoRepository _clipRepo;

        public ClipVideoController(ClipVideoRepository clipRepo)
        {
            this._clipRepo = clipRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_clipRepo.Get().Select(x => x.ToDto()));
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
                ClipVideoDto dto = _clipRepo.Get(id)?.ToDto();
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
                return Ok(_clipRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(ClipVideoFormDto dto)
        {
            try
            {
                return Ok(_clipRepo.Update(dto.ToEntity()));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPost]
        public IActionResult Post(ClipVideoFormDto dto)
        {
            try
            {
                return Ok(_clipRepo.Insert(dto.ToEntity()));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpGet]
        [Route("CameraId/{id}")]
        public IActionResult GetCameraId(int id)
        {
            try
            {
                return Ok(_clipRepo.GetCameraId(id).Select(x => x.ToDto()));
            }
            catch (Exception)
            {
                return Problem("Unknown Error");
            }
        }


    }
}
