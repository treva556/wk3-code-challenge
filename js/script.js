
let url = "https://wk3-code-challenge-phi.vercel.app/"

document.addEventListener('DOMContentLoaded', () => {

    const movieRow = document.getElementById('random-film')
    const navBar = document.getElementById('navigationBar')

    navBar.addEventListener('click', () => {
        // hide categories, search and countries
        movieRow.style.display = "flex"
    })

    const createFilm = (poster, title, runtime, showtime) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-10', 'px-2', 'mb-5')
        cardDiv.setAttribute('id', 'carddivv')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-2')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-2', 'card-body')

        const filmImg = document.createElement('img')
        filmImg.classList.add('card-img', 'h-100')
        filmImg.src = poster
        filmImg.objectFit = 'cover'

        const filmTitle = document.createElement('h3')
        filmTitle.classList.add('card-title')
        filmTitle.textContent = title

        const filmRuntime = document.createElement('p')
        filmRuntime.classList.add('card-text')
        filmRuntime.textContent = runtime

        let filmShowtime = document.createElement('p')
        filmShowtime.classList.add('card-text')
        filmShowtime.textContent = showtime

    
        bodyDiv.appendChild(filmTitle)
        bodyDiv.appendChild(filmRuntime)
        bodyDiv.appendChild(filmShowtime)


        // image elements
        imgDiv.appendChild(filmImg)

        // divs to row
        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        // row to card
        cardDiv.appendChild(rowDiv)

        

        // returns cardDiv
        return cardDiv
    }

    
    let loadFilm = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let filmData = data[0]
            // console.log(filmData);
            let title = "Film Title : " + filmData.title
            let poster = filmData.poster
            let runtime = "Runtime : " + filmData.runtime + " Minutes"
            let showtime = "Showtime : " + filmData.showtime
           

            let filmElement = createFilm(poster, title, runtime, showtime)
            movieRow.appendChild(filmElement)

        })
    }
        function getFilm() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                data.films.forEach(film => {
                    displayAllFilms(film)
                    // getOneFilm(film)
                });
            });
            
        
        }

        function displayAllFilms(film){
            let title = document.createElement('p')
            title.textContent = film.title
            let main = document.getElementById("random-film")
            main.append(title)

         

            title.addEventListener('click', () =>{
                // createFilm()
                getOneFilm(film)
                // hiddenDiv.removeAttribute('hidden')
                hiddenDiv2 = document.getElementById('carddivv').hidden = true
                hiddenDiv = document.getElementById('div1').hidden = false
                // hiddenDiv3 = document.getElementById()
                
            })
     
        }

        function getOneFilm(film) {
            document.getElementById("Title").textContent = film.title
            document.getElementById("Poster").src = film.poster
            document.getElementById("Runtime").textContent = "Runtime: " + film.runtime + " Minutes"
            document.getElementById("Showtime").textContent = "Showtime: " + film.showtime

            let ticketRem = document.getElementById('ticketno')
            // tickets available would be film.capacity string minus film.tickets_sold
            let capacityConvert = parseInt(film.capacity, 10)
            ticketRem.textContent = capacityConvert - film.tickets_sold


        }

        
        const loadTitles = () => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    let titleNames = data
                    let titleElements = titleNames.map(
                        fillms => displayAllFilms(fillms.title)
                    )
                    movieRow.append(...titleElements)
                })
        
    }



    function ticketsPurchase() {
      let button = document.querySelector("#Buy-Ticket")
      button.addEventListener("click", () => {
      let currentListing = document.querySelector("#ticketno")
      let number = parseInt(currentListing.textContent)
      console.log(currentListing.textContent)
      if(number >=1){
          currentListing.textContent = currentListing.textContent -1}
          else {document.querySelector("#Buy-Ticket").textContent = "Sold Out"
            alert("Sorry, No more tickets available!!")}
        }
        )
  }
  
  ticketsPurchase();
   loadFilm();
  getFilm();
  loadTitles();

})









