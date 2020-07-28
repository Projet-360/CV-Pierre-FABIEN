
var Third = new ScrollMagic.Controller();
var ThirdInTM = new TimelineMax();

ThirdInTM.add([
  TweenMax.fromTo(".jsandco-third-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 0.08,
    opacity: 1,
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var ThirdInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-first',
    triggerHook: -1,
  })

  .setTween(ThirdInTM)
  .addTo(Third)
// FIN SECOND___________________________________________________________________________________________
//THIRD_________________________________________________________________________________________________
var Third = new ScrollMagic.Controller();
var ThirdTM = new TimelineMax();
var ThirdOut = new ScrollMagic.Controller();
var ThirdOutTM = new TimelineMax();

ThirdTM.add([
  TweenMax.fromTo(".jsandco-third-js", 1, {
    scale: 0.08,
    y: "-200%",
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    y: "-200%",
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var ThirdTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-second',
    triggerHook: 0,
  })

  .setTween(ThirdTM)
  .addTo(Third)
// _____________________________________________________________________________________________________
ThirdOutTM.add([
  TweenMax.fromTo(".jsandco-third-js", 1, {
    x: "0%",
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }, {
    x: "-100%",
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var ThirdOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-third',
    triggerHook: 0,
  })

  .setTween(ThirdOutTM)
  .addTo(ThirdOut)


// FIN THIRD____________________________________________________________________________________________