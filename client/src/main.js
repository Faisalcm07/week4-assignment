import "./style.css"

const display = document.getElementById('app')
const form = document.getElementById('form')

async function fetchData (){

    const data = await fetch (`https://week4-assignment-wwvs.onrender.com/movies`)
    const favourite_movies = await data.json ()
    console.log(favourite_movies)

    return favourite_movies

}

async function formSubmission (event){
    event.preventDefault() 

    const formData = new FormData(form)
    const input = Object.fromEntries(formData)
    const inputJSON = JSON.stringify(input)

    const post = await fetch(`https://week4-assignment-wwvs.onrender.com/movies`, {
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    body: inputJSON
  })
  window.location.reload()

}

form.addEventListener(`submit`,formSubmission) 

async function displayMovies() {
  const movies = await fetchData()

   const table = document.querySelector("#app table")

  movies.forEach((item) => {
    const row = document.createElement('tr')
    const name = document.createElement('td')
    const favMovie = document.createElement('td')
    const deleteCell = document.createElement('td')
    const deleteButton = document.createElement('button')
    deleteButton.id = item.id

    name.textContent = item.name
    favMovie.textContent = item.movie
    deleteButton.textContent = `delete`
    
    deleteCell.appendChild(deleteButton)
    row.append(name, favMovie, deleteCell)

    table.appendChild(row)
  })
}
displayMovies()

function deleteMovie (){ 
  const deleteMovie = await fetch (`https://week4-assignment-wwvs.onrender.com/movies`,{ headers: {
      "Content-Type" : "application/json"
    },
    method: "delete",}) }
