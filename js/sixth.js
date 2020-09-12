var SixthTM = new TimelineMax();
var Sixth = new ScrollMagic.Controller();

SixthTM.add([
  TweenMax.fromTo(".jsandco-sixth-js", 1, {
    scale: 0,
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var SixthTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.jsandco-sixth',
    triggerHook: 1,
  })
  .setTween(SixthTM)

  .addTo(Sixth)

