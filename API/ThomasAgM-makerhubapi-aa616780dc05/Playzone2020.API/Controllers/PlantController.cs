using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Plants;
using Playzone2020.API.Filters;
using Playzone2020.API.Mappers;
using Playzone2020.API.services;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Repositories;

namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantController : ControllerBase
    {
        private readonly PlantRepository _plantRepo;
        private readonly PlantService _plantService;


        public PlantController(PlantRepository plantRepo, PlantService PlantService)
        {
            _plantRepo = plantRepo;
            _plantService = PlantService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_plantService.Get());
            }
            catch (Exception ex)
            {

                return Problem("Unknown Error" + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                PlantDto dto = _plantService.Get(id);
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
        [ApiAuthorize("Administrateur")]
        public IActionResult Delete(int id)
        {
            try
            {
                return Ok(_plantRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        //[ApiAuthorize("Administrateur")]

        public IActionResult Update(PlantDto dto)
        {
            
            try
            {
                _plantService.Update(dto);
                return Ok();
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }


        [HttpPost]
        [ApiAuthorize("Administrateur")]
        public IActionResult Post(PlantDto dto)
        {
            try
            {
                int id = _plantService.Add(dto);
                if (id == -1)
                {
                    return BadRequest("Cette plante existe déjà");
                }
                return Ok(id);
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }



        [HttpGet("image/{id}")]
        public IActionResult GetImage(int id)
        {
            try
            {
                Plant dto = _plantRepo.Get(id).FirstOrDefault();
                if (dto == null || dto?.Image == null)
                {
                    return NotFound();
                }
                return File(dto.Image, dto.MimeTypeImage);
            }
            catch (Exception ex)
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
                return Ok(_plantRepo.DeletePic(id));
            }
            catch (Exception e)
            {

                return Problem("Unknown Error");
            }
        }

    }
}
