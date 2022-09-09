﻿using System.ComponentModel.DataAnnotations;

namespace MarvelChronicles.Models
{
    using static Common.DataConstants;

    public class Category
    {
        [Required]
        [MaxLength(NameMaxLength)]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; } = null!;
    }
}