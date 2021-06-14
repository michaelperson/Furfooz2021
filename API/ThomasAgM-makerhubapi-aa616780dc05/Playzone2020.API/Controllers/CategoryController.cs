using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Playzone2020.API.Dto.Category;
using Playzone2020.API.Mappers;

using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Repositories;

namespace Playzone2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryRepository _categoryRepo;

        public CategoryController(CategoryRepository categoryRepo)
        {
            this._categoryRepo = categoryRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_categoryRepo.Get().Select(x => x.ToDto()));
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
                CategoryDto dto = _categoryRepo.Get(id)?.ToDto();
                if(dto == null)
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
                return Ok(_categoryRepo.Delete(id));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPut]
        public IActionResult Update(CategoryFormDto dto)
        {
            try
            {
                return Ok(_categoryRepo.Update(dto.ToEntity()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }

        [HttpPost]
        public IActionResult Post(CategoryFormDto dto)
        {
            try
            {
                return Ok(_categoryRepo.Insert(dto.ToEntity()));
            }
            catch (Exception)
            {

                return Problem("Unknown Error");
            }
        }
    }
}
