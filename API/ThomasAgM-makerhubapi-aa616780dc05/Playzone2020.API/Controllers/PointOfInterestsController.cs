using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.PointOfInterests;
using Playzone2020.API.Filters;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Repositories;

namespace Playzone2020.API.Controllers
{
    [Route("api/pointinteret")]
    [ApiController]
    public class PointOfInterestsController : ControllerBase
    {
        private readonly PointOfInterestsRepository _poiRepo;

        public PointOfInterestsController(PointOfInterestsRepository poiRepo)
        {
            _poiRepo = poiRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_poiRepo.Get().Select(x => x.ToDto()));
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
                PointOfInterestsDto dto = _poiRepo.Get(id)?.ToDto();
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
                return Ok(_poiRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(PointOfInterestsFormDto dto)
        {
            try
            {
                return Ok(_poiRepo.Update(dto.ToEntity()));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPost]
        public IActionResult Post(PointOfInterestsFormDto dto)
        {
            try
            {
                return Ok(_poiRepo.Insert(dto.ToEntity()));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpGet("Image/{id}")]
        public IActionResult GetImage(int id)
        {
            try
            {
                PointOfInterests dto = _poiRepo.Get(id);
                if (dto == null || dto?.Image == null)
                {
                    return NotFound();
                }
                return File(dto.Image, dto.MimeType);
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut("delete-img/{id}")]
        [ApiAuthorize("Administrateur")]
        public IActionResult DeletePic(int id)
        {
            try
            {
                return Ok(_poiRepo.DeletePic(id));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }
    }
}
