let url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', () => {

    const FilmRow = document.getElementById('random-film')
    const navBar = document.getElementById('navBar')

    navBar.addEventListener('click', () => {
        // hide categories, search and countries
        FilmRow.style.display = "flex"
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

        const filmShowtime = document.createElement('p')
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
            FilmRow.appendChild(filmElement)

        })
    }
        function getFilm() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                data.forEach(film => {
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
            document.getElementById("title").textContent = film.title
            document.getElementById("poster").src = film.poster
            document.getElementById("runtime").textContent = "Runtime: " + film.runtime + " Minutes"
            document.getElementById("showtime").textContent = "Showtime: " + film.showtime

            let ticketRem = document.getElementById('ticketno')
            // tickets available would be film.capacity string minus film.tickets_sold
            let capacityConvert = parseInt(film.capacity, 10)
            ticketRem.textContent = "Remaining Tickets: " + (capacityConvert - film.tickets_sold)

        }

        
        const loadTitles = () => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    let titleNames = data
                    let titleElems = titleNames.map(
                        filmss => displayAllFilms(filmss.title)
                    )
                    FilmRow.append(...titleElems)
                })
        
    }

  




  
  
// tickets available would be film.capacity string minus film.tickets_sold

   loadFilm()
  getFilm()
  loadTitles()
//   getOneFilm()

})






