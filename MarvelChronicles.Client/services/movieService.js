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