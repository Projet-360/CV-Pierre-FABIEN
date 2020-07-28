
  // FIRST______________________________________________________________________________________________
  // ZOOM FIRST
  var First = new ScrollMagic.Controller();
  var FirstTM = new TimelineMax();

  FirstTM.add([
    TweenMax.fromTo(".jsandco-first-js", 1, {
      scale: 1,
      position: "fixed",
      force3D: false,
      ease: Linear.easeNone,
    }, {
      scale: 130,
      position: "fixed",
      ease: Linear.easeNone,
      display: "none",
      force3D: false
    }),
    TweenMax.from(".jsandco-second-js", 1, {
      scale: 0,
      position: "fixed",
      ease: Linear.easeNone,
      display: "none",
      force3D: false
    }),
  ]);

  var FirstTM = new ScrollMagic.Scene({
      duration: '100%',
      triggerHook: 0,
    })
    .setTween(FirstTM)
    .addTo(First)
// FIN ZOOM FIRST
// FIN FIRST____________________________________________________________________________________________