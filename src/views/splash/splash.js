import '../../css/templates/splash.css'
import barba from '@barba/core'
import { gsap } from 'gsap'

barba.init({
  debug: true,
  transitions: [{
    name: 'opacity-transition-splash',
    leave(data) {
      console.log('leave splash', data.current)
      gsap.to(data.current.container, {x:'100%'})
      return gsap.to(data.current.container, {
        x: '100%',
        opacity: 0,
      });
        data.current.container.remove()
    },
    enter(data) {
      console.log('enter splash', data)
      data.current.container.remove()
      return gsap.from(data.next.container, {
        opacity: 0,
        x: '-100%'
      });
        data.current.container.remove()
    }
  }]
});
