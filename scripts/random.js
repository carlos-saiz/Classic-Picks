// import { peliculas } from "./respuesta.js"
import { movies } from "./movies.js"

const randomContainer = document.getElementById('randomEngine')
const vamosBtn = document.getElementById('vamos-mobile')
const reset = document.getElementById('reiniciar')
const respuesta = document.getElementById('respuesta-dialog')
const winner = document.getElementById('respuesta-ganadora')
const closeModal = document.getElementById('close-modal')
const addMovie = document.getElementById('add-movie')
const addMovieModal = document.getElementById('add-movie-modal')
const remainingList = document.getElementById('remaining-list')
const saveList = document.getElementById('save-list')

const previousMovies = []


function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Function to create a movie card element
function createMovieCard(item) {
  const articleCard = document.createElement('article');
  articleCard.classList.add('card');
  articleCard.textContent = item.name;
  articleCard.dataset.movieId = item.id; // Set data attribute
  return articleCard;
}

// Function to create a movie name element
function createMovieNameElement(item) {
  const movie = document.createElement('p');
  movie.textContent = item.name;
  movie.classList.add('movie-name');
  movie.dataset.movieId = item.id; // Set data attribute
  return movie;
}

// Shuffle the movies array
const shuffledArray = shuffleArray(movies.movies);

// Select the top 5 movies from the shuffled array
const topMovies = shuffledArray.slice(0, 5);

// Iterate over the top movies and create movie cards and movie name elements
topMovies.forEach((item) => {
  const movieCard = createMovieCard(item);
  const movieNameElement = createMovieNameElement(item);
  previousMovies.push(item.id)

  // Append the movie card and movie name element to the desired containers
  list.appendChild(movieCard);
  randomContainer.appendChild(movieNameElement);

});

const remainingMovies = movies.movies.filter( movie => {
  return !previousMovies.includes(movie.id)
  
})

remainingMovies.forEach(movie => {
  const remainingCard = createMovieCard(movie)
  remainingCard.addEventListener('click', () => {
    remainingCard.style.background = 'gold'
    if(remainingCard.dataset.movieSelected === 'true') {
      remainingCard.dataset.movieSelected = false
    remainingCard.style.background = 'transparent'
      
    } else {
      remainingCard.dataset.movieSelected = true
    }
  })
  remainingList.appendChild(remainingCard)
})

const names = document.querySelectorAll('.movie-name')
const cards = gsap.utils.toArray('#list article')

saveList.addEventListener('click', () => {
  const selectedMovies = remainingList.querySelectorAll('[data-movie-selected= "true"]')
  selectedMovies.forEach(movie => {
    console.log(movie);
    list.appendChild(movie)
    previousMovies.push(parseInt(movie.dataset.movieId))
    elementsToAnimate.push(movie)
  })
  console.log(remainingMovies, 'rrmmm', previousMovies)
})


const elementsToAnimate = gsap.utils.toArray(names)
closeModal.addEventListener('click', (event) => {
  event.preventDefault();
  respuesta.close()
})

addMovie.addEventListener('click', () => {
  // addMovieModal.showModal()
})

let stopTime = gsap.utils.random(0,previousMovies.length,true)
let tl = new TimelineMax({
  repeat: 4,
  paused: true,
  duration: .2,
  onComplete: callTest,
  onCompleteParams:['{self}', 'param2']
})
console.log(cards, 'cards')

console.log(gsap.utils.toArray('.movie-name'))
const elemIndexes = elementsToAnimate.map(x => x.dataset.movieId)

function showModal() {
  respuesta.showModal()
}

function callTest(el) {
  const randomStop = Math.floor(stopTime())
  console.log(el, 'el cll', randomStop, previousMovies);
  gsap.to(names[randomStop], {autoAlpha: 1})
  gsap.to(cards[randomStop], {borderColor: 'gold'})
  winner.innerText = names[randomStop].textContent
  gsap.delayedCall(2, showModal)
  // gsap.to(cards[randomStop], {x: '-200%', display: 'none', opacity: 0})
  // gsap.to(names[randomStop], {display: 'none'})
}
function animation() {
gsap.utils.shuffle(elementsToAnimate).forEach( (elem, i) => {
  const randItemIndex = gsap.utils.random(elementsToAnimate)
  console.log( 'st', elem);
   tl
    .add('start')
    .to(elem, {autoAlpha: 1, data: elem.dataset.movieId}, 'start')
    .to(elem, {autoAlpha: 0, data: "get"})
    .to(cards[elemIndexes.indexOf(elem.dataset.movieId)],{ background: 'gold'}, 'start')
    .to(cards[elemIndexes.indexOf(elem.dataset.movieId)], {background: 'transparent', data: 'tr'})
    console.log(elem.dataset.movieId)
      // tl.to(randItemIndex, {scale: 5, autoAlpha: 0, y: -12 })
      // tl.to(backdrop, {autoAlpha: 1}).to(backdrop, {autoAlpha: 0})
    // tl.to('article:nth-child(2)', {border: '2px solid #D4B42D'})
  tl.timeScale(0.6 / i * 125  )
})
}

gsap.from('#list article', {y: -10, opacity: 0, stagger: 0.1, delay: 0.1, ease: 'elastic'})
vamosBtn.addEventListener('click', () => {
  animation()
  console.log(tl.isActive(), stopTime);
  if(!tl.isActive()) {
    tl.restart()
    
  }
  tl.play()
})
reset.addEventListener('click', () => {
  tl.restart()
})