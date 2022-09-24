console.log('start GSAP');

// gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ defaults: { duration: .3, ease: "sine" } });

// tl.from('.company', { delay: .3, opacity: 0, })
//   .from('.company__title', { delay: .5, y: "20", opacity: 0, })
//   .from('.company__subtitle', { y: "20", opacity: 0, })
//   .from('.company__button', { opacity: 0, })
//   .from('.company__contacts, .icon__scroll', { opacity: 0, })

tl.to('.company', { delay: .3, opacity: 1, })
  .fromTo('.company__title', {y: "20"}, {y: "0", delay: .3, opacity: 1, })
  .fromTo('.company__subtitle', {y: "20"}, {y: "0",  opacity: 1, })
  .to('.company__button', { opacity: 1, })
  .to('.company__contacts, .icon__scroll', { opacity: 1, })

// gsap.to('.company', {
//   scrollTrigger: {
//     // scrub: 1
//     // toggleAction: 'restart pause reverse pause'
//   },
//   opacity: 0,
// })


// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.company',
//     toggleActions: 'restart none reverse none',
//     start: 'top top',
//     // endTrigger: '.about',
//     end: 'center top',
//     // markers: true,
//     scrub: 1,
//     pin: true,
//   },
// })
//   .to('.company__title', {
//     x: '-40',
//     opacity: 0,
//   })
//   .to('.company__subtitle', {
//     x: '-40',
//     opacity: 0,
//   })
//   .to('.company__button', {
//     x: '-40',
//     opacity: 0,
//   })
//   .to('.company', {
//     // scale: 1.5,
//     opacity: 0,
//   })


// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.about',
//     toggleActions: 'restart none reverse none',
//     start: 'top top',
//     // endTrigger: '.about',
//     // end: 'bottom center',
//     end: 'center top',
//     markers: true,
//     scrub: 1,
//     pin: true,
//   },
// })
//   .from('.gsap__about-title', {
//     opacity: 0,
//     y: 40,
//   })
//   .from('.gsap__about-subtitle', {
//     opacity: 0,
//     y: 40,
//   })
//   .from('.about__img', {
//     opacity: 0,
//   })
//   .from('.about__content', {
//     opacity: 0,
//     y: 40,
//   })
