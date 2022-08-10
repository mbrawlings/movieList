console.log('hello world')

let message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie)

    inputField.value = ''
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)
}
function deleteMovie(event) {
    event.preventDefault()
    event.target.parentNode.remove()
    message.textContent = `Movie deleted!`
    //revealMessage(event)
}
function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `Movie watched!`
    } else {
        message.textContent = `Movie added back!`
    }
    //revealMessage()
}

// function cbHide(event) {
//     message.classList.add('hide')
//     console.log(event.target.classList)
// }

// function revealMessage(event) {
//     console.log(event.target.classList)
//     setTimeout((event)=>cbHide(event), 1000)
// }

document.querySelector('form').addEventListener('submit', addMovie)