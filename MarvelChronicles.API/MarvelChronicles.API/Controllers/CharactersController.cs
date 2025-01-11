using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarvelChronicles.Data;
using MarvelChronicles.Models;

namespace MarvelChronicles.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharactersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CharactersController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Character>>> GetCharacters() => await _context.Characters.ToListAsync();
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetCharacter(Guid id)
        {
            var character = await _context.Characters.FindAsync(id);

            if (character == null)
            {
                return NotFound();
            }

            return character;
        }

        [HttpGet("/api/Characters/{characterId}/category")]
        public async Task<ActionResult<string>> GetCharacterCategory(Guid characterId)
        {
            var character = await _context.Characters.FindAsync(characterId);

            if (character == null)
            {
                return NotFound();
            }

            var category = await _context.Categories.FindAsync(character.CategoryId);

            return category?.Name != null ? category.Name : string.Empty;
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCharacter(Guid id, Character character)
        {
            if (id != character.Id)
            {
                return BadRequest();
            }

            _context.Entry(character).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CharacterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        
        [HttpPost]
        public async Task<ActionResult<Character>> PostCharacter(Character character)
        {
            _context.Characters.Add(character);
            await _context.SaveChangesAsync();
            return Ok(character.Id);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCharacter(Guid id)
        {
            var character = await _context.Characters.FindAsync(id);
            if (character == null)
            {
                return NotFound();
            }

            _context.Characters.Remove(character);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CharacterExists(Guid id)
        {
            return (_context.Characters?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}