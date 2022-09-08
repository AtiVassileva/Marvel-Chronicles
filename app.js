import * as characterService from './services/characterService.js';
import * as comicService from './services/comicService.js';
import * as movieService from './services/movieService.js';
import * as storyService from './services/storyService.js';

import * as htmlCreator from './js/htmlCreator.js';

const container = document.getElementsByClassName('container')[0];
const loader = document.getElementsByClassName('loader')[0];
const carousel = document.getElementsByClassName('carousel-wrapper')[0];

const homeBtn = document.getElementsByClassName('nav-btn-home')[0];
const charactersBtn = document.getElementsByClassName('nav-btn')[0];
const comicsBtn = document.getElementsByClassName('nav-btn')[1];
const moviesBtn = document.getElementsByClassName('nav-btn')[2];
const storiesBtn = document.getElementsByClassName('nav-btn')[3];

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  carousel.style.display = 'block';
  container.innerHTML = '';
});

charactersBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';
  carousel.style.display = 'none';

  let characters = [];

  characterService.getCharacterList()
    .then(response => response.map((x) => characters.push(x)));

  loader.classList.replace('hidden', 'active');

  setTimeout(() => {
    characters.map((x) => {
      container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.name, x.description);
    });

    loader.classList.replace('active', 'hidden');
  }, 2000);

});

moviesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';
  carousel.style.display = 'none';

  let movies = [];

  movieService.getMoviesList()
    .then(response => response.map((x) => movies.push(x)));

  loader.classList.replace('hidden', 'active');

  setTimeout(() => {
    movies.map((x) => {
      container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.title, x.description);
    });

    loader.classList.replace('active', 'hidden');
  }, 2000);
});

comicsBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';
  carousel.style.display = 'none';

  let comics = [];

  comicService.getComicsList()
    .then(response => response.map((x) => comics.push(x)));

  loader.classList.replace('hidden', 'active');

  setTimeout(() => {
    comics.map((x) => {
      container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.title, x.description);
    });

    loader.classList.replace('active', 'hidden');
  }, 2000);
});

storiesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  container.innerHTML = '';
  carousel.style.display = 'none';

  let stories = [];

  storyService.getStoriesList()
    .then(response => response.map((x) => stories.push(x)));

  loader.classList.replace('hidden', 'active');

  setTimeout(() => {
    const path = 'https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630';
    stories.map((x) => {
      container.innerHTML += htmlCreator.returnCard(path, 'jpg', x.title, x.description);
    });

    loader.classList.replace('active', 'hidden');
  }, 2000);
});