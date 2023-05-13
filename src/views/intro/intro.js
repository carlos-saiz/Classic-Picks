import '../../css/templates/intro.css'
import barba from '@barba/core'
// import gsap;
import { gsap } from 'gsap'
// const { gsap } = require("gsap/dist/gsap");

console.log(gsap, 'gsap?')

barba.init({
  debug: true,
  transitions: [{
    name: 'opacity-transition-intro',
    leave(data) {
      console.log('leave intro', data.current.container, data.current.url.href, barba.history)
      // data.current.container.remove()
      gsap.to(data.current.container, {x:'-100%'})
      return gsap.to(data.current.container, {
        color: 'green',
        opacity: 0,
        x: '-100%',
      });
    },
    enter(data) {
      console.log('enter intro', data)
      data.current.container.remove()
      return gsap.from(data.next.container, {
        opacity: 0,
        x: '100%'
      });
    }
  }]
});
