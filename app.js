const teamsBtn = document.getElementsByClassName('team-btn')[0];
const charactersURL = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=67ab9aa2a29d896368e8047429caf05e&hash=d1f82078d832b8a13c1f0fbbd964746e';
//const coctailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

window.addEventListener('load', (e) => {
    e.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'POST',
            // 'Access-Control-Allow-Headers': Origin, X-Requested-With, Content-Type, Accept, Authorization',
            // "Access-Control-Allow-Credentials" : true 
        },
        mode: 'cors'
    };

    const container = document.getElementsByClassName('container')[0];
    // const cardsContainer = document.getElementsByClassName('cards')[0];
    // const boxContainer = document.getElementsByClassName('box')[0];

    fetch(charactersURL, options)
        .then(response => response.json())
        .then(r => r.data.results.map((x) => {
            console.log(x.name + " " + x.thumbnail.path + "." + x.thumbnail.extension);
            container.innerHTML += 
            `
            <div class="card">
                <div class="card__header">
                <img src=${
        x.thumbnail.path.includes('image_not_available') 
        ? 'https://image.api.playstation.com/vulcan/img/rnd/202111/1814/n7UmKNPcZKKZNb8J1PxPWgsa.jpg'
    : x.thumbnail.path + "." + x.thumbnail.extension} 
    alt="card__image" class="card__image" width="600" height="300">
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Comic</span>
      <h4>${x.title}</h4>
      <p>${!x.description? 'No description available.': x.description}</p>
    </div>
    <!--
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image">
        <div class="user__info">
          <h5>Jane Doe</h5>
          <small>2h ago</small>
        </div>
      </div> -->
    </div>
  </div>       `
        }));
})