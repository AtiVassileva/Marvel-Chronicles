const container = document.getElementsByClassName('container')[0];

const carousel = document.getElementsByClassName('carousel-wrapper')[0];
const loader = document.getElementsByClassName('loader')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

import { getCharacterList, getCharacterCategory } from '../services/characterService.js';
import { returnCard } from './htmlCreator.js';

export const handleCharacterListing = (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';

    let characters = [];

    getCharacterList()
        .then(response => response.map((x) => characters.push(x)));

    loader.classList.replace('hidden', 'active');

    setTimeout(() => {
        characters.map((x) => {

            let categoryName = '';
            getCharacterCategory(x.id)
                .then(response => categoryName = response);

            setTimeout(() => {
                container.innerHTML += returnCard(x.imageUrl, x.name, x.description, categoryName);
            }, 1000);
        });

        setTimeout(() => {
            loader.classList.replace('active', 'hidden');
        }, 1000);

    }, 2000);
};