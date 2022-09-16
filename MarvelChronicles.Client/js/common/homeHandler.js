const container = document.getElementsByClassName('container')[0];
const carousel = document.getElementsByClassName('carousel-wrapper')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

export const redirectToHome = (e) => {
    e.preventDefault();
    
    container.innerHTML = '';
    carousel.style.display = 'block';
    characterForm.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';
};