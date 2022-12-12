
const baseUrl = "http://localhost:3000/films";


function fetchData() {
    fetch(baseUrl)
    .then(respone => respone.json())
    .then((data) => { 
        data.forEach((films) =>{
            let li = document.createElement("li");
            li.textContent = films.title;
            li.addEventListener("click", (e)=>{
              let buttonContent =
              document.querySelector("button#ticketsPurchase")
              buttonContent.textContent = "Buy Tickets"
                let title =
             document.getElementById("movieTitle");
                title.textContent =
            films.title;
            let img =
            document.getElementById("imageHolder");
               img.src =
            films.poster;
               let showTime =
            document.getElementById("showingTime");
              showTime.textContent =
            films.showtime;
            let runTime =
            document.getElementById("runningTime");
              runTime.textContent =
            `${films.runtime} Minutes`;
            let tickets =
          document.querySelector("div#ticket-counter");
                tickets.textContent = films["capacity"] - films["tickets_sold"]
            })
            document.querySelector("ul#Movies").appendChild(li)
        })
    })
    }

fetchData();

function baseMovies() { fetch(baseUrl)
    .then(respone => respone.json())
    .then(data => {
        document.querySelector('h2#movieTitle').textContent = data[0]['title']
        document.querySelector("img#imageHolder").setAttribute("src",`${data[0]["poster"]}`)
        document.querySelector("div#showingTime").textContent = data[0]["showtime"]
        document.querySelector("div#runnTime").textContent = `${data[0]["runtime"]} Minutes`
        document.querySelector("ul#Movies").firstElementChild.remove()
        document.querySelector("div#ticket-counter").textContent = data[0]["capacity"] - data[0]["tickets_sold"]
    })
}

baseMovies();

function ticketsPurchase() {
    let button = document.querySelector("button#ticketsPurchase")
    button.addEventListener("click", () => {
    let currentListing = document.querySelector("div#ticket-counter")
    let number = parseInt(currentListing.textContent)
    if(number >=1){
        currentListing.textContent = currentListing.textContent -1}
        else {document.querySelector("button#ticketPurchase").textContent = "Sold Out"
          alert("Sorry, No more tickets available!!")}
      }
      )
}

ticketsPurchase()