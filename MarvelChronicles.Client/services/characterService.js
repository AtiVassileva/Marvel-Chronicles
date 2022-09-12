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
    return await fetch(charactersURL, requestOptions)
        .then(response => response.json());
};

export const getCharacterCategory = async (characterId) => {
    return await fetch(`https://localhost:7267/api/Characters/${characterId}/category`, requestOptions)
        .then(response => response.text());
};

export const createCharacter = async (characterData) => {
    let response = await fetch('https://localhost:7267/api/Characters',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...characterData })
        });

    let result = await response.text();

    return result;
};