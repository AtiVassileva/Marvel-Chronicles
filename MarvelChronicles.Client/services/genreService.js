const genresURL = 'https://localhost:7267/api/Genres ';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors'
};

export const getGenreByName = async (name) => {
    return await fetch(`https://localhost:7267/api/Genres/name/${name}`, requestOptions)
    .then(response => response.json());
};