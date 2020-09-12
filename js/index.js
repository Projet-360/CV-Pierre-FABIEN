window.onload = function () {
  TweenLite.ticker.fps(30); 

  //MISE EN PLACE DU SCROLL ANIMATION
  var scroll = new SmoothScroll('.jsandco-navigation-list-item-link', {
    speedAsDuration: true,
    durationMin: 1500,
    ignore: '[data-scroll-ignore] .menu-list-a'
  });

  // SET DES ANIMATIONS
  TweenMax.fromTo(".loader", 1, {
      delay: 1,
      opacity: 1,
      display: "flex",
    }, {
      delay: 1,
      opacity: 0,
      display: "none",
    }),



  TweenMax.set('body', {
    opacity: 1,
  })







  // FIN DES SETS DES ANIMATIONS


  // CHANGEMENT DE LA COULEUR DU BODY

  var GeneralSM = new ScrollMagic.Controller();


  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.jsandco-second',
      triggerHook: .5,
    })
    .setClassToggle(".body-jsandco", "second")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.jsandco-third',
      triggerHook: .5,
    })
    .setClassToggle(".body-jsandco", "third")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.jsandco-fourth',
      triggerHook: 0.9,
    })
    .setClassToggle(".body-jsandco", "fourth")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.jsandco-fifth',
      triggerHook: 0.8,
    })
    .setClassToggle(".body-jsandco", "fifth")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.jsandco-sixth',
      triggerHook: 0.9,
    })
    .setClassToggle(".body-jsandco", "sixth")
    .addTo(GeneralSM)














  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.jsandco-fourth',
      triggerHook: 0.9,
    })
    .setClassToggle(".jsandco-third-js-page", "fourth")
    .addTo(GeneralSM)

}


var hamburger = {
  navToggle: document.querySelector('.menuToggle'),
  nav: document.querySelector('.menu'),

  doToggle: function (e) {
      e.preventDefault();
      this.nav.classList.toggle('expanded');
  }
};
hamburger.navToggle.addEventListener('click', function (e) {
  hamburger.doToggle(e);
});
hamburger.nav.addEventListener('click', function (e) {
  hamburger.doToggle(e);
});




'use strict';

class ProgressIndicator {
  constructor ({ elem }) {
    this.elem = elem;
    this.line = this.elem.querySelector('.scroll-indicator__line');
    
    window.addEventListener('load', this._showProgress.bind(this));
    window.addEventListener('scroll', this._showProgress.bind(this));
  }
  _showProgress() {
    let docHeight = document.body.clientHeight;
    let screenHeight = document.documentElement.clientHeight;
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let lineWidth = 100 / (docHeight / (scrollPosition + screenHeight));
    this.line.style.width = lineWidth + '%';
  }
}

let progress = new ProgressIndicator({
  elem: document.querySelector('.scroll-indicator')
});