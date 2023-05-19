import { peliculas } from "./respuesta.js"
import { movies } from "./movies.js"

const randomContainer = document.getElementById('randomEngine')
// const list = document.getElementById('list')
console.log('random', movies, randomContainer)
console.log(movies)

let result = []
const shuffleMovies = movies['movies'].map( (movie, i) => {
      // console.log(parseInt(Math.random() * movies['movies'].length), movies['movies'][i])
  console.log(result, result.at(-1), result.includes(result.at(-1)))
  let randItem = parseInt(Math.random() * movies['movies'].length)
  if(!result.includes(randItem)) {
    result.push(randItem)
  }
  return result

})


console.log(shuffleMovies.splice(0, 5),  'sm')

movies["movies"].map( (item, i) => {
  const movie = document.createElement('p')
  const articleCard = document.createElement('article')
  movie.textContent = item.name
  // articleCard.classList.add('card')
  // articleCard.textContent = item.name
  // list.appendChild(articleCard)
  movie.classList.add('movie-name')
  // movie.style.opacity = 0
  randomContainer.appendChild(movie)
  setTimeout(() => {
    // movie.removeAttribute('id')
  }, 10)
  // movie.setAttribute('id', `animation-title`)
})


 const words = document.querySelectorAll('.movie-name');
console.log(words, 'words')
    let currentWord = 0;

    function animateWords() {
      words[currentWord].classList.add('visible');
      setTimeout(() => {
        words[currentWord].classList.remove('visible');
        currentWord = (currentWord + 1) % words.length;
        animateWords();
      }, 200);
    }

    animateWords();
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

