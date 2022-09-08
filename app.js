import * as characterService from './services/characterService.js';
import * as comicService from './services/comicService.js';
import * as movieService from './services/movieService.js';
import * as storyService from './services/storyService.js';

import * as htmlCreator from './js/htmlCreator.js';

const container = document.getElementsByClassName('container')[0];

const charactersBtn = document.getElementsByClassName('nav-btn')[0];
const comicsBtn = document.getElementsByClassName('nav-btn')[1];
const moviesBtn = document.getElementsByClassName('nav-btn')[2];
const storiesBtn = document.getElementsByClassName('nav-btn')[3];

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
  }, 2000);
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
  }, 2000);
});

comicsBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';

  let comics = [];

  comicService.getComicsList()
  .then(response => response.map((x) => comics.push(x)));

  setTimeout(() => {
    comics.map((x) => {
      container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.title, x.description);
    })
  }, 2000);
});

storiesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';

  let stories = [];

  storyService.getStoriesList()
  .then(response => response.map((x) => stories.push(x)));

  setTimeout(() => {
    const path = 'https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630';
    stories.map((x) => {
      container.innerHTML += htmlCreator.returnCard(path, 'jpg', x.title, x.description);
    })
  }, 2000);
});