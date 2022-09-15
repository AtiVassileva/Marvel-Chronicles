using System.ComponentModel.DataAnnotations;

namespace MarvelChronicles.Models
{
    using static Common.DataConstants;
    public class Movie
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(TitleMaxLength)]
        public string Title { get; set; } = null!;

        [MaxLength(DescriptionMaxLength)]
        public string? Description { get; set; }

        [Required]
        public string ImageUrl { get; set; } = null!;

        [Required]
        public string Director { get; set; } = null!;

        public DateTime PremiereDate { get; set; }

        [Required]
        public Guid GenreId { get; set; }

        public Genre? Genre { get; set; }
    }
}