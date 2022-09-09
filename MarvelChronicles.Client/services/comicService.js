const comicsURL = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=67ab9aa2a29d896368e8047429caf05e&hash=d1f82078d832b8a13c1f0fbbd964746e';

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors'
};

export const getComicsList = async () => {
    let comics = [];

    await fetch(comicsURL, requestOptions)
        .then(response => response.json())
        .then(result =>  comics = result.data.results);

    return comics;
};