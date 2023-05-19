import { peliculas } from "./respuesta.js"
import { movies } from "./movies.js"

const randomContainer = document.getElementById('randomEngine')
const list = document.getElementById('list')
console.log('random', movies, randomContainer)

movies["movies"].map( (item, i) => {
  const movie = document.createElement('p')
  const articleCard = document.createElement('article')
  movie.textContent = item.name
  // articleCard.classList.add('card')
  movie.setAttribute('id', `movie-${i}`)
  // articleCard.textContent = item.name
  // list.appendChild(articleCard)
  movie.classList.add('movie-name')
  randomContainer.appendChild(movie)
})


const  elementsToAnimate = gsap.utils.toArray('.movie-name')
const tl = gsap.timeline({ repeat: -1, repeatDelay: .3, delay: 0.5, paused: true }, "-=0.7")
const backdrop = document.getElementById('backdrop')
const vamosBtn = document.getElementById('vamos-mobile')
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];


elementsToAnimate.forEach( (elem, i) => {
  const randItemIndex = gsap.utils.random(elementsToAnimate)
  console.log(randItemIndex.textContent)
    // tl.fromTo(elem, {scale: 5, autoAlpha :0}, { scale: 0, autoAlpha: 1, delay: 0.5 + (0.5 * i), repeat: -1})
    tl.to(randItemIndex, {scale: 0, autoAlpha: 1, y: -12 })
    // tl.to(backdrop, {autoAlpha: 1}).to(backdrop, {autoAlpha: 0})
  tl.to('article:nth-child(2)', {border: '2px solid #D4B42D'})
    tl.timeScale(0.6 / i * 25  )
  })


vamosBtn.addEventListener('click', () => {
  console.log(tl.isActive())
  if(tl.isActive()) {
    console.log('dd')
    tl.pause()
  }
  tl.play()
 
})

