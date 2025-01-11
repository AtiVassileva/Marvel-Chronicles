const container = document.getElementsByClassName('container')[0];
const carousel = document.getElementsByClassName('carousel-wrapper')[0];

const characterForm = document.getElementsByClassName('character-form')[0];
const comicForm = document.getElementsByClassName('comic-form')[0];
const movieForm = document.getElementsByClassName('movie-form')[0];

import { getCategoryByName } from '../../services/categoryService.js';
import { createCharacter } from '../../services/characterService.js';

export const handleCreateCharacterBtnClick = (e) => {
    e.preventDefault();

    container.innerHTML = '';
    carousel.style.display = 'none';
    movieForm.style.display = 'none';
    comicForm.style.display = 'none';
    characterForm.style.display = 'block';
};  

export const handleCharacterCreation = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { name, age, imageUrl, description, category } = Object.fromEntries(formData);

    if (!name || !age || !imageUrl || !description) {
      return;
    }

    let categoryId = '';

    getCategoryByName(category)
      .then(result => categoryId = result.id);

    setTimeout(() => {
      let characterData = {
        name,
        age,
        imageUrl,
        description,
        categoryId
      };

      createCharacter(characterData);
    }, 1000);

    characterForm.reset();
    carousel.style.display = 'block';
    characterForm.style.display = 'none';
};