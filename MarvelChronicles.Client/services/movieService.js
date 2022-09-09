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
    let movies = [];

    await fetch(moviesUrl, requestOptions)
        .then(response => response.json())
        .then(result =>  movies = result);

    return movies;
};