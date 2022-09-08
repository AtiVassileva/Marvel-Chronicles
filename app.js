import * as characterService from './services/characterService.js';
import * as movieService from './services/movieService.js';
import * as htmlCreator from './js/htmlCreator.js';

const container = document.getElementsByClassName('container')[0];
const charactersBtn = document.getElementsByClassName('nav-btn')[0];
const moviesBtn = document.getElementsByClassName('nav-btn')[2];

charactersBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';

  let characters = [];

  characterService.getCharacterList()
    .then(response => response.map((x) => characters.push(x)));

  setTimeout(() => {
    characters.map((x) => {
      container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.name, x.description);
    });
  }, 1000);
});

moviesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';

  let movies = [];

  movieService.getMoviesList()
  .then(response => response.map((x) => movies.push(x)));

  setTimeout(() => {
    movies.map((x) => {
      container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.title, x.description);
    })
  }, 1000);
})