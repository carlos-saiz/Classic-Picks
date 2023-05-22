// import { peliculas } from "./respuesta.js"
import { movies } from "./movies.js"

const randomContainer = document.getElementById('randomEngine')


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

  // Append the movie card and movie name element to the desired containers
  list.appendChild(movieCard);
  randomContainer.appendChild(movieNameElement);

});


 const words = document.querySelectorAll('.movie-name');
 const cards = document.querySelectorAll('.card');
const ganadoraRespuesta = document.getElementById('respuesta-ganadora')
const respuestaModal = document.getElementById('respuesta-dialog')
const closeModal = document.getElementById('close-modal')
 let currentWord = 0;
let animationPlayState = 'play';
let timing;
let animationStopped = false;
// console.log(cards, 'cards', shuffleArray(new (cards)))
function animateWords() {
  words[currentWord].classList.add('visible');
  cards[currentWord].style.borderColor = 'gold';

  timing = setTimeout(() => {
    words[currentWord].classList.remove('visible');
    cards[currentWord].style.borderColor = 'black';
  
    // console.log(words[currentWord].dataset.movieId, 'data mid', cards);
    currentWord = (currentWord + 1) % words.length;
    if (animationPlayState === 'play' && !animationStopped) {
      animateWords();
    }
  }, 200);
}

function stopAnimation() {
  animationStopped = true;
}

function resetAnimation() {
  currentWord = 0;
  animationStopped = true;
  
  animationPlayState = 'play'
  // clearTimeout(timing)
  animateWords();
}

function handleAnimationEnd() {
  clearTimeout(timing);
  cards[currentWord].setAttribute('data-veredict', 'winner');
  console.log(words[currentWord].textContent)
  ganadoraRespuesta.innerText = words[currentWord].textContent
  words[currentWord].classList.add('visible');
  cards[currentWord].style.borderColor = 'gold';
  cards[currentWord].style.backgroundColor = 'black';
  cards[currentWord].style.color = 'white';
  setTimeout(() => {
    respuestaModal.showModal()
  }, 1600)
}

words[currentWord].addEventListener('animationend', () => {
  // handleAnimationEnd();
  // resetAnimation()
  // enableButton();
});

// Start the animation
const vamosBtn = document.getElementById('vamos-mobile')
vamosBtn.addEventListener('click', () => {
const stopTime = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);
  animateWords();
setTimeout(() => {
  stopAnimation();
  console.log('sett')
  handleAnimationEnd();
}, stopTime);
})
const reset = document.getElementById('reiniciar')
reset.addEventListener('click', () => {
  resetAnimation()
})

closeModal.addEventListener('click', () => {
  respuestaModal.close()
  // cards[currentWord].remove()
})
