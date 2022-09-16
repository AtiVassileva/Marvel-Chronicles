import * as characterService from './services/characterService.js';
import * as comicService from './services/comicService.js';
import * as movieService from './services/movieService.js';
import * as categoryService from './services/categoryService.js';
import * as genreService from './services/genreService.js';
import * as htmlCreator from './js/htmlCreator.js';

window.addEventListener('load', () => {

  const container = document.getElementsByClassName('container')[0];

  const loader = document.getElementsByClassName('loader')[0];
  const carousel = document.getElementsByClassName('carousel-wrapper')[0];

  const homeBtn = document.getElementsByClassName('nav-btn-home')[0];

  const charactersBtn = document.getElementsByClassName('nav-btn')[0];
  const createCharacterBtn = document.getElementsByClassName('nav-btn')[1];

  const comicsBtn = document.getElementsByClassName('nav-btn')[2];
  const createComicBtn = document.getElementsByClassName('nav-btn')[3];

  const moviesBtn = document.getElementsByClassName('nav-btn')[4];
  const createMovieBtn = document.getElementsByClassName('nav-btn')[5];

  const characterForm = document.getElementsByClassName('character-form')[0];
  const comicForm = document.getElementsByClassName('comic-form')[0];
  const movieForm = document.getElementsByClassName('movie-form')[0];

  homeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'block';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';
  });

  charactersBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';

    let characters = [];

    characterService.getCharacterList()
      .then(response => response.map((x) => characters.push(x)));

    loader.classList.replace('hidden', 'active');

    setTimeout(() => {
      characters.map((x) => {

        let categoryName = '';
        characterService.getCharacterCategory(x.id)
          .then(response => categoryName = response);

        setTimeout(() => {
          container.innerHTML += htmlCreator.returnCard(x.imageUrl, x.name, x.description, categoryName);
        }, 1000);
      });

      setTimeout(() => {
        loader.classList.replace('active', 'hidden');
      }, 1000);

    }, 2000);

  });

  moviesBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';

    let movies = [];

    movieService.getMoviesList()
      .then(response => response.map((x) => movies.push(x)));

    loader.classList.replace('hidden', 'active');

    setTimeout(() => {
      movies.map((x) => {
        let genreName = '';
        movieService.getMovieGenre(x.id)
          .then(response => genreName = response);

        setTimeout(() => {
          container.innerHTML += htmlCreator.returnCard(x.imageUrl, x.title, x.description, genreName);
        }, 1000);
      });

      setTimeout(() => {
        loader.classList.replace('active', 'hidden');
      }, 1000);
    }, 2000);
  });

  comicsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';

    let comics = [];

    comicService.getComicsList()
      .then(response => response.map((x) => comics.push(x)));

    loader.classList.replace('hidden', 'active');

    setTimeout(() => {
      comics.map((x) => {
        container.innerHTML += htmlCreator.returnCard(x.imageUrl, x.title, x.description, "Comic");
      });

      loader.classList.replace('active', 'hidden');
    }, 2000);
  });

  createCharacterBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';
    characterForm.style.display = 'block';
  });

  characterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { name, age, imageUrl, description, category } = Object.fromEntries(formData);

    if (!name || !age || !imageUrl || !description) {
      return;
    }

    let categoryId = '';

    categoryService.getCategoryByName(category)
      .then(result => categoryId = result.id);

    setTimeout(() => {
      let characterData = {
        name,
        age,
        imageUrl,
        description,
        categoryId
      };

      characterService.createCharacter(characterData);
    }, 1000);

    characterForm.reset();
    carousel.style.display = 'block';
    characterForm.style.display = 'none';
  });

  createComicBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'block';
  });

  comicForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { title, description, author, imageUrl, price, premiereDate } = Object.fromEntries(formData);

    if (!title || !description || !author || !imageUrl || !price || !premiereDate) {
      return;
    }

    let comicData = {
      title,
      description,
      author,
      imageUrl,
      price,
      premiereDate
    };

    comicService.createComic(comicData);

    comicForm.reset();
    carousel.style.display = 'block';
    comicForm.style.display = 'none';
  });

  createMovieBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    comicForm.style.display = 'none';
    movieForm.style.display = 'block';
  });

  movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { title, description, imageUrl, director, premiereDate, genre } = Object.fromEntries(formData);

    if (!title || !director || !imageUrl || !description || !premiereDate) {
      return;
    }

    let genreId = '';

    genreService.getGenreByName(genre)
      .then(result => genreId = result.id);

    setTimeout(() => {
      let movieData = {
        title,
        imageUrl,
        director,
        premiereDate,
        description,
        genreId
      };

      movieService.createMovie(movieData);
    }, 1000);

    movieForm.reset();
    carousel.style.display = 'block';
    movieForm.style.display = 'none';
  });

});