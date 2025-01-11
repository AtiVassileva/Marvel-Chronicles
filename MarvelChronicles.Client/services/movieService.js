const moviesUrl = 'https://localhost:7267/api/Movies';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors'
};

export const getMoviesList = async () => {
    return await fetch(moviesUrl, requestOptions)
        .then(response => response.json());
};

export const getMovieGenre = async (movieId) => {
    return await fetch(`https://localhost:7267/api/Movies/${movieId}/genre`, requestOptions)
        .then(response => response.text());
};

export const createMovie = async (movieData) => {
    let response = await fetch('https://localhost:7267/api/Movies',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...movieData })
        });

    let result = await response.text();

    return result;
};