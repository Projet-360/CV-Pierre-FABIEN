
// SECOND_______________________________________________________________________________________________
var Second = new ScrollMagic.Controller();
var SecondTM = new TimelineMax();

SecondTM.add([
  TweenMax.fromTo(".jsandco-second-js", 1, {
    scale: 0,
    y: "-100%",
    opacity: 0,
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    y: "-100%",
    opacity: 1,
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }),
  TweenMax.set('.body-jsandco', {
    opacity: 1,
  })

]);

var SecondTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerHook: 0,
  })

  .setTween(SecondTM)
  .addTo(Second)
// _____________________________________________________________________________________________________
var SecondOut = new ScrollMagic.Controller();
var SecondOutTM = new TimelineMax();

SecondOutTM.add([
  TweenMax.fromTo(".jsandco-second-js", 1, {
    scale: 1,
    y: "-100%",
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 10,
    y: "-100%",
    opacity: 1,
    force3D: false,
    ease: Linear.easeNone,
  }),
]);

var SecondOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-second',
    triggerHook: 0,
  })

  .setTween(SecondOutTM)
  .addTo(SecondOut)
// _____________________________________________________________________________________________________