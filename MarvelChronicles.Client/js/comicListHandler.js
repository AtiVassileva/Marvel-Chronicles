const container = document.getElementsByClassName('container')[0];

const carousel = document.getElementsByClassName('carousel-wrapper')[0];
const loader = document.getElementsByClassName('loader')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

import { getComicsList } from '../services/comicService.js';
import { returnCard } from './htmlCreator.js';

export const handleComicListing = (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';

    let comics = [];

    getComicsList()
      .then(response => response.map((x) => comics.push(x)));

    loader.classList.replace('hidden', 'active');

    setTimeout(() => {
      comics.map((x) => {
        container.innerHTML += returnCard(x.imageUrl, x.title, x.description, x.author);
      });

      loader.classList.replace('active', 'hidden');
    }, 2000);
};