using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarvelChronicles.Data;
using MarvelChronicles.Models;

namespace MarvelChronicles.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComicsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ComicsController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comic>>> GetComics() 
            => await _context.Comics.ToListAsync();
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Comic>> GetComic(Guid id)
        {
            var comic = await _context.Comics.FindAsync(id);

            if (comic == null)
            {
                return NotFound();
            }

            return comic;
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComic(Guid id, Comic comic)
        {
            if (id != comic.Id)
            {
                return BadRequest();
            }

            _context.Entry(comic).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComicExists(id))
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
        public async Task<ActionResult<Comic>> PostComic(Comic comic)
        {
            _context.Comics.Add(comic);
            await _context.SaveChangesAsync();
            return Ok(comic.Id);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComic(Guid id)
        {
            var comic = await _context.Comics.FindAsync(id);
            if (comic == null)
            {
                return NotFound();
            }

            _context.Comics.Remove(comic);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComicExists(Guid id)
        {
            return (_context.Comics?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}