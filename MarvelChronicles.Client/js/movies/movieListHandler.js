const container = document.getElementsByClassName('container')[0];

const carousel = document.getElementsByClassName('carousel-wrapper')[0];
const loader = document.getElementsByClassName('loader')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

import { getMoviesList, getMovieGenre } from '../../services/movieService.js';
import { returnCard } from '../common/htmlCreator.js';

export const handleMovieListing = (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';

    let movies = [];

    getMoviesList()
        .then(response => response.map((x) => movies.push(x)));

    loader.classList.replace('hidden', 'active');

    setTimeout(() => {
        movies.map((x) => {
            let genreName = '';
            getMovieGenre(x.id)
                .then(response => genreName = response);

            setTimeout(() => {
                container.innerHTML += returnCard(x.imageUrl, x.title, x.description, genreName);
            }, 1000);
        });

        setTimeout(() => {
            loader.classList.replace('active', 'hidden');
        }, 1000);
    }, 2000);
};