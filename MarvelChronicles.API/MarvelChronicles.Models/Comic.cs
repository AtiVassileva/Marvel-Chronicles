using System.ComponentModel.DataAnnotations;

namespace MarvelChronicles.Models
{
    using static Common.DataConstants;
    public class Comic
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
        public string Author { get; set; } = null!;

        public DateTime PremiereDate { get; set; }

        public decimal Price { get; set; }
    }
}