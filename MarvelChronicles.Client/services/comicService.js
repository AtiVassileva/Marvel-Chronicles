const comicsURL = 'https://localhost:7267/api/Comics';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors'
};

export const getComicsList = async () => {
    return await fetch(comicsURL, requestOptions)
        .then(response => response.json());
};

export const createComic = async (comicData) => {
    let response = await fetch('https://localhost:7267/api/Comics',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...comicData })
        });

    let result = await response.text();

    return result;
};