//FOURTH_________________________________________________________________________________________________
var Fourth = new ScrollMagic.Controller();
var FourthTM = new TimelineMax();
var FourthOutTM = new TimelineMax();
var FourthPreTM = new TimelineMax();

FourthPreTM.add([
  TweenMax.fromTo(".jsandco-fourth-js", 1, {
    scale: 0,
    force3D: false,
    ease: Linear.easeNone,
  }, {
    scale: 0,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var FourthPreTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-first',
    triggerHook: 1,
  })
  .setTween(FourthPreTM)
  .addTo(Fourth)






FourthTM.add([
  TweenMax.fromTo(".jsandco-fourth-js", 1, {
    scale: 1,
    x: "100%",
    y: "0%",
    force3D: false,
    ease: Linear.easeNone,
  }, {
    scale: 0.99,
    x: "0%",
    y: "0%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var FourthTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-third',
    triggerHook: 0,
  })
  .setTween(FourthTM)
  .addTo(Fourth)

FourthOutTM.add([
  TweenMax.fromTo(".jsandco-fourth-js", 1, {
    scale: 1,
    x: "0%",
    y:"0%",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 0.99,
    x: "100%",
    y: "-150%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var FourthOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-fourth',
    triggerHook: 0,
  })
  .setTween(FourthOutTM)
  .addTo(Fourth)
  
  
// FIN FOURTH____________________________________________________________________________________________