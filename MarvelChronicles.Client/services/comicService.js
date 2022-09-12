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