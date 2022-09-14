const categoriesURL = 'https://localhost:7267/api/Categories ';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors'
};

export const getCategoryByName = (name) => {
    return fetch(`https://localhost:7267/api/Categories/name/${name}`, requestOptions)
    .then(response => response.json());
};