using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Mappers;
using Playzone2020.DAL.Repositories;

namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryPlantController : ControllerBase
    {
        private readonly CategoryPlantRepository _categoryPlantRepo;

        public CategoryPlantController(CategoryPlantRepository categoryPlantRepo)
        {
            this._categoryPlantRepo = categoryPlantRepo;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_categoryPlantRepo.Get().Select(x => x.ToDto()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    try
        //    {
        //        PlantDto dto = _plantRepo.Get(id)?.ToDto();
        //        if (dto == null)
        //        {
        //            return NotFound();
        //        }
        //        return Ok(dto);
        //    }
        //    catch (Exception)
        //    {

        //        return Problem("Unknown Error");
        //    }
        //}

    }
}
