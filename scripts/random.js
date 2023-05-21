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
    console.log(currentIndex, 'ci', randomIndex);
    currentIndex -= 1;

    // Swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// console.log(result, 'res')

const sa = shuffleArray(movies.movies)
const toplay = sa.slice(0,5)
console.log(sa,  'sm', toplay)

toplay.map( (item, i) => {
  const movie = document.createElement('p')
  const articleCard = document.createElement('article')
  movie.textContent = item.name
  articleCard.classList.add('card')
  articleCard.textContent = item.name
  articleCard.id = item.id
  list.appendChild(articleCard)
  movie.classList.add('movie-name')
  movie.id = `movie-${item.id}`
  // movie.style.opacity = 0
  randomContainer.appendChild(movie)
  setTimeout(() => {
    // movie.removeAttribute('id')
  }, 10)
  // movie.setAttribute('id', `animation-title`)
})


 const words = document.querySelectorAll('.movie-name');
 const cards = document.querySelectorAll('.card');
console.log(words, 'words')
    let currentWord = 0;
    let animationPlayState = 'play'
    function animateWords() {
      words[currentWord].classList.add('visible');
        cards[currentWord].style.borderColor = 'gold'
      const listItem = document.getElementById('item')
      const timing = setTimeout(() => {
        words[currentWord].classList.remove('visible');
        cards[currentWord].style.borderColor = 'black'
        currentWord = (currentWord + 1) % words.length;
        // console.log(currentWord)
        if(animationPlayState === 'play'){
          animateWords();
        }
      }, 200);
      setTimeout(() => {
        clearTimeout(timing)
        animationPlayState = 'paused'
        console.log('is time?', words[currentWord])
        words[currentWord].setAttribute('data-veredict', 'winner')
        words[currentWord].classList.add('visible');
        cards[currentWord].style.borderColor = 'gold'
        cards[currentWord].style.backgroundColor = 'black'
        cards[currentWord].style.color = 'white'
      }, Math.floor(Math.random() * (20000 - 3000 + 1) + 3000))
      // }, 2000)

    }

    animateWords();
      const getListItem = document.querySelector('[data-veredict]')
      console.log(getListItem, 'glijj');



// const  elementsToAnimate = gsap.utils.toArray('.movie-name')
// const tl = gsap.timeline({ repeat: -1, repeatDelay: .3, paused: true }, "-=0.7")
// const backdrop = document.getElementById('backdrop')
// const vamosBtn = document.getElementById('vamos-mobile')
// const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];


// elementsToAnimate.forEach( (elem, i) => {
//   const randItemIndex = gsap.utils.random(elementsToAnimate)
//   console.log(randItemIndex.textContent)
//     // tl.fromTo(elem, {scale: 5, autoAlpha :0}, { scale: 0, autoAlpha: 1, delay: 0.5 + (0.5 * i), repeat: -1})
//     tl.to(randItemIndex, {scale: 5, autoAlpha: 0, y: -12 })
//     // tl.to(backdrop, {autoAlpha: 1}).to(backdrop, {autoAlpha: 0})
//   tl.to('article:nth-child(2)', {border: '2px solid #D4B42D'})
//     // tl.timeScale(0.6 / i * 25  )
//   })


// vamosBtn.addEventListener('click', () => {
//   console.log(tl.isActive())
//   if(tl.isActive()) {
//     console.log('dd')
//     tl.pause()
//   }
//   tl.play()
//  
// })

