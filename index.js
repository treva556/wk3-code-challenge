document.addEventListener('DOMContentLoaded', () => {
    getFilm()

})

let url = "http://localhost:3000/films"

//fetch request to get the films
function getFilm(id) {
    fetch(`${url}${id}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(film => {
            console.log(film);
            displayAllFilms(film)
        });
    });
    

}



// function that displays all films by their titles
function displayAllFilms(film){
    // characters.preventDefault()
    console.log(film.title);
    let title = document.createElement('p')
    title.textContent = film.title
    let main = document.getElementById("main")
    main.append(title)
    title.addEventListener('click', () =>{
        getOneFilm(film)
    })
}

// function that displays information about a specific film
function getOneFilm(film) {
    document.getElementById("movietitle").textContent = film.title
    document.getElementById("movieimg").src = film.poster
    document.getElementById("runtime").textContent = "Runtime: " + film.runtime
    document.getElementById("showtime").textContent = "Showtime: " + film.showtime
   
    let ticketNo = document.getElementById("ticketno")
// tickets available would be film.capacity as a string minus film.tickets_sold
let capacityNo= parseInt(film.capacity, 10)
ticketNo.textContent = "Remaining Tickets: " + (capacityNo - film.tickets_sold)

let btn = document.getElementById('tickets')
btn.addEventListener('click', () => {
   
    if(ticketNo.textContent <= 0){
        let btn1 = getElementById('soldout')
        btn1.removeAttribute('hidden')
        // btn.textContent = "Sold Out"
    }else {
         let sold = (film.tickets_sold+=1)
         console.log(sold);

    }

})
    }