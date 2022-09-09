using System.ComponentModel.DataAnnotations;

namespace MarvelChronicles.Models
{
    using static Common.DataConstants;

    public class Character
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; } = null!;

        public int Age { get; set; }

        [MaxLength(DescriptionMaxLength)]
        public string? Description { get; set; }

        [Required]
        public string ImageUrl { get; set; } = null!;

        [Required]
        public Guid CategoryId { get; set; }
        public Category? Category { get; set; }

        public HashSet<Comic> Comics { get; set; } = new();

        public HashSet<Movie> Movies { get; set; } = new();
    }
}