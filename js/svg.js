  var GeneralSM = new ScrollMagic.Controller();
  var SvgTM1 = new TimelineMax();
  var SvgTM2 = new TimelineMax();
  var SvgTM3 = new TimelineMax();

  var ourScene = new ScrollMagic.Scene({
          triggerElement: '.jsandco-third',
          triggerHook: .5,
      })
      .setClassToggle(".jsandco-second-js-box-row-svg", "third")
      .addTo(GeneralSM)





  SvgTM2.add([
      TweenMax.fromTo(".jsandco-second-js-box-row-svg", 1, {
          x: -150,
          y: 0,
          force3D: false,
          ease: Linear.easeNone,
      }, {
          x: 20,
          y: -120,
          force3D: false,
          ease: Linear.easeNone,
      }),
  ]);
  var ourScene = new ScrollMagic.Scene({
          triggerElement: '.jsandco-fifth',
          duration: '100%',
          triggerHook: 1,
      })
      .setTween(SvgTM2)
      .addTo(GeneralSM)


  SvgTM3.add([
      TweenMax.fromTo(".jsandco-second-js-box-row-svg", 1, {
          x: 20,
          y: -120,
          force3D: false,
          ease: Linear.easeNone,
      }, {
          x: 20,
          y: -200,
          force3D: false,
          ease: Linear.easeNone,
      }),
  ]);

  var ourScene = new ScrollMagic.Scene({
          triggerElement: '.jsandco-fourth',
          triggerHook: .8,
      })
      .setClassToggle(".jsandco-second-js-box-row-svg", "fourth")
      .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
          triggerElement: '.jsandco-fifth',
          triggerHook: .8,
      })
      .setClassToggle(".jsandco-second-js-box-row-svg", "fifth")
      .addTo(GeneralSM)

      
  SvgTM1.add([
    TweenMax.fromTo(".jsandco-second-js-box-row-svg", 1, {
        x: 0,
        y: 0,
        force3D: false,
        ease: Linear.easeNone,
    }, {
        x: -150,
        y: 0,
        force3D: false,
        ease: Linear.easeNone,
    }),
]);
var ourScene = new ScrollMagic.Scene({
        triggerElement: '.jsandco-fourth',
        duration: '100%',
        triggerHook: 1,
    })
    .setTween(SvgTM1)
    .addTo(GeneralSM)