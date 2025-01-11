const container = document.getElementsByClassName('container')[0];
const carousel = document.getElementsByClassName('carousel-wrapper')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

import { createComic } from '../../services/comicService.js';

export const handleCreateComicBtnClick = (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'block';
};

export const handleComicCreation = (e) => {
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

    createComic(comicData);

    comicForm.reset();
    carousel.style.display = 'block';
    comicForm.style.display = 'none';
};