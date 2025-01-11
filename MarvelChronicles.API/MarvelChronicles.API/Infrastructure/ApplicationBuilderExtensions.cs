using MarvelChronicles.Data;
using MarvelChronicles.Models;
using Microsoft.EntityFrameworkCore;

namespace MarvelChronicles.API.Infrastructure;

public static class ApplicationBuilderExtensions
{
    public static IApplicationBuilder PrepareDatabase(this IApplicationBuilder app)
    {
        using var scopedServices = app.ApplicationServices.CreateScope();

        var serviceProvider = scopedServices.ServiceProvider;

        MigrateDatabase(serviceProvider);

        SeedCategories(serviceProvider);
        SeedGenres(serviceProvider);
        SeedCharacters(serviceProvider);
        SeedMovies(serviceProvider);
        SeedComics(serviceProvider);

        return app;
    }

    private static void MigrateDatabase(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider
            .GetRequiredService<ApplicationDbContext>();
        dbContext.Database.Migrate();
    }

    private static void SeedCategories(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        if (dbContext.Categories.Any())
        {
            return;
        }

        dbContext.Categories.AddRange(new[]
        {
            new Category {Name = "Superhero"},
            new Category {Name= "Villain"}
        });

        dbContext.SaveChanges();
    }

    private static void SeedGenres(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        if (dbContext.Genres.Any())
        {
            return;
        }

        dbContext.Genres.AddRange(new[]
        {
            new Genre { Name = "Fantasy"},
            new Genre {Name = "Action"},
            new Genre {Name = "Drama"},
            new Genre {Name = "Thriller"},
            new Genre {Name = "Comedy"},
            new Genre {Name = "Adventure"}
        });

        dbContext.SaveChanges();
    }

    private static void SeedCharacters(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        if (dbContext.Characters.Any())
        {
            return;
        }

        var superheroCategoryId = dbContext.Categories
            .FirstOrDefault(c => c.Name.ToLower() == "superhero")!.Id;

        var villainCategory = dbContext.Categories
            .FirstOrDefault(c => c.Name.ToLower() == "villain")!.Id;

        dbContext.Characters.AddRange(new[]
        {
            new Character
            {
                Name = "Spider-man",
                Description = "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
                Age = 16,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg"
            },
            new Character
            {
                Name = "Captain America",
                Description = "In the future, Captain America is still fighting alongside his Avenger counterparts, while many known super heroes have retired or lost their lives. He forms Liberty Brigade after the Avengers closed the portal to Earth-MX2 dimension. During a battle against Loki to save the world, he perishes. His life force is then used by Thor to form a new star to watch over the Earth.",
                Age = 180,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://static.toiimg.com/photo/msid-92954243/92954243.jpg"
            },
            new Character
            {
                Name = "Hulk",
                Description = "John Eisenhart was a greedy, selfish, studio executive in the year 2099, until a run-in with the Knights of the Banner turned him into the next century’s Hulk. While researching the Knights, a group that deified the 20th Century’s Hulk, John tricked a young member, Gawain, into revealing their illegal gamma ray experiments. Because the Knights refused to sell him their story, John turned them into the authorities, and watched them fight to their deaths for their beliefs. Realizing his mistake, John leapt into the fight, and was accidentally bombarded by gamma rays, turning him into the Hulk.",
                Age = 49,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://sportshub.cbsistatic.com/i/2021/11/25/e1bb4b76-8058-47ae-a98f-511f7a7b10a1/marvel-reveals-starship-hulk-new-form-and-powers-comic-spoilers.jpg"
            },
            new Character
            {
                Name = "Black Panther",
                Description = "T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.",
                Age = 43,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://kbimages1-a.akamaihd.net/7e060fa5-3a91-4ed1-94a3-57274b53e233/353/569/90/False/marvel-s-black-panther-4.jpg"
            },
            new Character
            {
                Name = "Loki",
                Description = "Loki, Prince of Asgard, Odinson, rightful heir of Jotunheim, and God of Mischief, is burdened with glorious purpose. His desire to be a king drives him to sow chaos in Asgard. In his lust for power, he extends his reach to Earth.",
                Age = 1000,
                CategoryId = villainCategory,
                ImageUrl = "https://insidethemagic.net/wp-content/uploads/2021/05/Loki-Sorcerer-Supreme-Cloak-550x425.jpeg"
            },
            new Character
            {
                Name = "Thor",
                Description = "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
                Age = 1500,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://i.simpalsmedia.com/point.md/news/thumbnails/large/8817e58740a0f5a1fab7191484791803.webp"
            },
            new Character
            {
                Name = "Doctor Strange",
                Description = "Once a highly successful, yet notably egotistical, surgeon, Doctor Stephen Strange endured a terrible accident that led him to evolve in ways he could have never foreseen.",
                Age = 42,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://wallpaperaccess.com/full/6418108.jpg"
            },
            new Character
            {
                Name = "Iron Man",
                Description = "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
                Age = 48,
                CategoryId = superheroCategoryId,
                ImageUrl = "https://www.sideshow.com/storage/product-images/501061U/iron-man_marvel_feature.jpg"
            },
            new Character
            {
                Name = "Thanos",
                Description = "The Mad Titan Thanos quests across the universe in search of the Infinity Stones, intending to use their limitless power for saving the universe by wiping out half of its population.",
                Age = 1000,
                CategoryId = villainCategory,
                ImageUrl = "https://i.pinimg.com/originals/68/84/10/688410c12edecf385116ef28b769e257.jpg"
            },
            new Character
            {
                Name = "Green Goblin",
                Description = "Norman Osborn is the founder of Oscorp Technologies. After experimenting on himself with an unstable chemical, Norman developed an alternate, evil personality known as Green Goblin.",
                Age = 55,
                CategoryId = villainCategory,
                ImageUrl = "https://cdn.mos.cms.futurecdn.net/m4C9TKoYYVnSjJHHcZNsMe.jpg"
            }
        });

        dbContext.SaveChanges();
    }

    private static void SeedMovies(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        if (dbContext.Movies.Any())
        {
            return;
        }

        var actionGenre = dbContext.Genres
            .FirstOrDefault(g => g.Name.ToLower() == "action")!.Id;

        dbContext.Movies.AddRange(new []
        {
            new Movie
            {
                Title = "The Amazing Spider-Man",
                Description = "Peter Parker, an outcast high school student, gets bitten by a radioactive spider and attains superpowers. Soon, he is forced to use his abilities to fight a monstrous foe.",
                PremiereDate = new DateTime(2012, 7, 3),
                Director = "Marc Webb",
                GenreId = actionGenre,
                ImageUrl = "https://cdn.cloudflare.steamstatic.com/steam/apps/212580/capsule_616x353.jpg"
            },
            new Movie
            {
                Title = "Thor (2011)",
                Description = "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
                PremiereDate = new DateTime(2011, 4, 17),
                Director = "Kenneth Branagh",
                GenreId = actionGenre,
                ImageUrl = "https://m.media-amazon.com/images/S/pv-target-images/76d655f98b2ceab257487a1b0014af1fb9fd867f9ee094a9b60d50371790ea9e._UR1920,1080_.jpg"
            },
            new Movie
            {
                Title = "Avengers: Endgame",
                Description = "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
                PremiereDate = new DateTime(2019, 4, 26),
                Director = "Anthony Russo, Joe Russo",
                GenreId = actionGenre,
                ImageUrl = "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
            }
        });


        dbContext.SaveChanges();
    }

    private static void SeedComics(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        if (dbContext.Comics.Any())
        {
            return;
        }

        dbContext.Comics.AddRange(new[]
        {
            new Comic
            {
                Title = "Spider-Man 2099: Exodus Omega #1",
                Description = "THE 30TH ANNIVERSARY OF 2099 REACHES ITS EXPLOSIVE CONCLUSION! The final battle for the Celestial Garden begins! Spider-Man vs. Norman Osborn! The X-Men vs. the Cabal! Two armies, two deadly enemies…and the keys to 2099’s future up for grabs! It’s a brawl for all: A brave new tomorrow for 2099 starts here!",
                Author = "Steve Orlando",
                PremiereDate = new DateTime(2022, 09, 07),
                ImageUrl = "https://i.annihil.us/u/prod/marvel/i/mg/d/e0/630506996c617/clean.jpg",
                Price = 60
            },
            new Comic
            {
                Title = "Black Panther (2021) #9",
                Description = "RANGE WARS PART ONE! Black Panther has returned to the Avengers, but after the recent events in Wakanda, Captain America isn't convinced T'Challa's head is in the game. When a dangerous new galactic interloper called the Colonialist arrives to take over the Earth, T'Challa will be tested like never before!",
                Author = "John Ridley",
                PremiereDate = new DateTime(2022, 09, 07),
                ImageUrl = "https://i.annihil.us/u/prod/marvel/i/mg/7/03/630506e0817d9/clean.jpg",
                Price = 80
            }
        });

        dbContext.SaveChanges();
    }
}