using MarvelChronicles.Models;
using Microsoft.EntityFrameworkCore;

namespace MarvelChronicles.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; } = null!;
        public DbSet<Character> Characters { get; set; } = null!;
        public  DbSet<Genre> Genres { get; set; } = null!;
        public DbSet<Comic> Comics { get; set; } = null!;
        public DbSet<Movie> Movies { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("DefaultConnection");
            }
        }
    }
}