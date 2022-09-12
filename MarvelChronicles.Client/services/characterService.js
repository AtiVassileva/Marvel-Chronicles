const charactersURL = 'https://localhost:7267/api/Characters';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors'
};

export const getCharacterList = async () => {
    let characters = [];

    await fetch(charactersURL, requestOptions)
        .then(response => response.json())
        .then(result =>  characters = result);

    return characters;
};

export const getCharacterCategory = async (characterId) => {
    let characterCategory = '';

    await fetch(`https://localhost:7267/api/Characters/${characterId}/category`, requestOptions)
    .then(response => response.text())
    .then(result => characterCategory = result);

    return characterCategory;
};