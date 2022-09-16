const container = document.getElementsByClassName('container')[0];
const carousel = document.getElementsByClassName('carousel-wrapper')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

import { getGenreByName } from '../../services/genreService.js';
import { createMovie } from '../../services/movieService.js';

export const handleCreateMovieBtnClick = (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    comicForm.style.display = 'none';
    movieForm.style.display = 'block';
};

export const handleMovieCreation = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { title, description, imageUrl, director, premiereDate, genre } = Object.fromEntries(formData);

    if (!title || !director || !imageUrl || !description || !premiereDate) {
      return;
    }

    let genreId = '';

    getGenreByName(genre)
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

      createMovie(movieData);
    }, 1000);

    movieForm.reset();
    carousel.style.display = 'block';
    movieForm.style.display = 'none';
};