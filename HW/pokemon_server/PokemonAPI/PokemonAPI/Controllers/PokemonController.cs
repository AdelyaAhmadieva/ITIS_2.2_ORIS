using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Elfie.Serialization;
using Microsoft.EntityFrameworkCore;
using PokemonAPI.Models;

namespace PokemonAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public sealed class PokemonController : ControllerBase
    {
        private static List<Pokemon> data = new List<Pokemon>();

        private readonly AppDbContext _context;

        public PokemonController(AppDbContext context)
        {
            _context = context;
        }
        
        /// <summary>
        /// Метод для получения всех покемонов
        /// </summary>
        /// <returns>Возвращает список всех покемонов в системе</returns>
        // GET: api/Pokemon
        [HttpGet]
        public IEnumerable<Object> Get()
        {
            return data.Select(p => new { p.Id, p.Name, p.ImageUrl });
        }
        
        /// <summary>
        /// Метод для получения покемонов по указанной строке пользователя
        /// </summary>
        /// <returns>Возвращает список всех найденых покемонов в системе</returns>
        [HttpGet("GetByFilter")]
        public IEnumerable<Object> GetByFilter([FromQuery]string? name)
        {
            return data.Where(p => p.Name.Contains(name, StringComparison.OrdinalIgnoreCase))
                .Select(p => new { p.Id, p.Name, p.ImageUrl })
                ;
        }

        /// <summary>
        /// Метод для получения всей информации по одному покемону
        /// </summary>
        /// <returns>Возвращает полную информацию о покемоне по заданному Id или Name</returns>
        // GET: api/Pokemon/5
        [HttpGet("{nameOrId}")]
        public Pokemon GetByIdOrName([FromRoute]string nameOrId)
        {
            int id = 0;
            if(int.TryParse(nameOrId, out id))
                return data.FirstOrDefault(p=>p.Id == id);
            else
                return data.FirstOrDefault(p=>p.Name.Equals(nameOrId, StringComparison.OrdinalIgnoreCase));
        }

        [HttpGet]
        public async Task<IEnumerable<Pokemon>> GetByFilter()
        {
            return await _context.Pokemons.ToListAsync();
        }
    }
}