

const api = 'http://www.omdbapi.com/?apikey=ced1d490&t='

let inputValue = document.getElementById('search-input')


let title = document.getElementById('title')
let plot = document.getElementById('desc')
let director = document.getElementById('director');
let actors = document.getElementById('actors')
let coll = document.getElementById('coll')
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');
let Rating = document.getElementById("Rating");
let genre = document.getElementById("genre");
let date = document.getElementById("date");
let runTime = document.getElementById('runtime')
let poster = document.getElementById('poster')



function invoke(){
    const query = api+inputValue.value;
    fetch(query).then((res) => {
        return res.json();
    }).then((res) => {
        console.log("response =>",res)
    
        title.innerText = res.Title
        plot.innerText = res.Plot
        director.innerText = res.Director
        actors.innerText = res.Actors
        coll.innerText = res.BoxOffice
        awards.innerText = res.Awards
        writer.innerText = res.Writer
        Rating.innerText = res.imdbRating
        genre.innerText = res.Genre
        date.innerText = res.Released
        poster.src = res.Poster
        runTime.innerText = res.Runtime
    })
}