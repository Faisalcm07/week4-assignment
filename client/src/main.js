const display = document.getElementById('app')
const form = document.getElementById('form')

async function fetchData (){

    const data = await fetch (`https://week4-assignment-wwvs.onrender.com/movies`)
    const favourite_movies = await data.json
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

  movies.forEach((movie) => {
    const div = document.createElement('div')
    const name = document.createElement('p')
    const movie = document.createElement('p')

    name.textContent = movies.name
    movie.textContent = movies.movie

    div.append(name, movie)

    display.appendChild(div)
  })
}
displayMovies()
