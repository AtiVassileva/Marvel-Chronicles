import { redirectToHome } from './js/common/homeHandler.js';

import { handleCharacterListing } from './js/characters/characterListHandler.js';
import { handleMovieListing } from './js/movies/movieListHandler.js';
import { handleComicListing } from './js/comics/comicListHandler.js';

import { handleCreateCharacterBtnClick, handleCharacterCreation } from './js/characters/createCharacterHandler.js';
import { handleCreateComicBtnClick, handleComicCreation } from './js/comics/createComicHandler.js';
import { handleCreateMovieBtnClick, handleMovieCreation } from './js/movies/createMovieHandler.js';

window.addEventListener('load', () => {

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

  homeBtn.addEventListener('click', (e) => redirectToHome(e));

  charactersBtn.addEventListener('click', (e) => handleCharacterListing(e));
  moviesBtn.addEventListener('click', (e) => handleMovieListing(e));
  comicsBtn.addEventListener('click', (e) => handleComicListing(e));

  createCharacterBtn.addEventListener('click', (e) => handleCreateCharacterBtnClick(e));
  characterForm.addEventListener('submit', (e) => handleCharacterCreation(e));
  createComicBtn.addEventListener('click', (e) => handleCreateComicBtnClick(e));

  comicForm.addEventListener('submit', (e) => handleComicCreation(e));
  createMovieBtn.addEventListener('click', (e) => handleCreateMovieBtnClick(e));
  movieForm.addEventListener('submit', (e) => handleMovieCreation(e));
});