var FifthInTM = new TimelineMax();
var Fifth = new ScrollMagic.Controller();
var FifthOutTM = new TimelineMax();


FifthOutTM.add([
  TweenMax.fromTo(".jsandco-fifth-js", 1, {
    x: "0%",
    y: "0%",
    scale: 1,
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }, {
    x: "0%",
    y: "0%",
    scale: 20,
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var FifthOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-fifth',
    triggerHook: 0,
  })
  .setTween(FifthOutTM)
  .addTo(Fifth)

  
FifthInTM.add([
  TweenMax.fromTo(".jsandco-fifth-js", 1, {
    opacity: 0,
    x: "-110%",
    y: "150%",
    scale: 0.9, 
    ease: Linear.easeNone,
    force3D: false
  }, {
    opacity: 1,
    x: "0%",
    y: "0%",
    scale: 1,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var FifthInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-fourth',
    triggerHook: 0,
  })
  .setTween(FifthInTM)
  .addTo(Fifth)