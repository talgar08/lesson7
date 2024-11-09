

const api_url = 'https://api.sampleapis.com/coffee/';
// DOM
const movies = document.querySelector('.movies')
const buttons = document.querySelectorAll('#btns button')
console.log("buttons: ", buttons);

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        movies.innerHTML = `<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
        fetchMovies(btn.innerText)
    })
})


function fetchMovies(genre = 'iced'){
    fetch(api_url + genre)
    .then( (response ) => {
        console.log(response,  '----response ----');
        
        return response.json()
    })
    .then( (movieData) => {
        console.log(movieData, '-----data-----');
        renderCard(movieData)
    })
}

fetchMovies();

function renderCard( arr = []){
    movies.innerHTML = arr.map( (coffee) => {
        return`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${coffee.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${coffee.title} </h5>
            </div>
        </div>`
    })
}