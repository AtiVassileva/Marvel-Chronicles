import * as characterService from './services/characterService.js';
import * as htmlCreator from './js/htmlCreator.js';
const container = document.getElementsByClassName('container')[0];
const charactersBtn = document.getElementsByClassName('nav-btn')[0];

charactersBtn.addEventListener('click', (e) => {
    container.innerHTML = '';
    e.preventDefault();

    let characters = [];

    characterService.getCharacterList()
    .then(response => response.map( (x) => characters.push(x)))
    
    setTimeout(() => {
        characters.map((x) => {
            container.innerHTML += htmlCreator.returnCard(x.thumbnail.path, x.thumbnail.extension, x.name, x.description);
        })
    }, 1000);
});