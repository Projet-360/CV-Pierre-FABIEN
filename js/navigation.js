var Navigation = new ScrollMagic.Controller();

// First

var ourScene = new ScrollMagic.Scene({
        triggerElement: '.jsandco-first',
        duration: "149%",
    })
    .setClassToggle('.jnli-right a[href="#second"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "100.5%",
        triggerElement: '.jsandco-second',
        triggerHook: 0.01,
    })
    .setClassToggle('.jnli-right a[href="#third"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        triggerElement: '.jsandco-third',
        duration: "100%",
        triggerHook: 0.01,
    })
    .setClassToggle('.jnli-right a[href="#fourth"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        triggerElement: '#fourth',
        triggerHook: 0.01,
        duration: "108%",
    })
    .setClassToggle('.jnli-right a[href="#fifth"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        triggerElement: '#fifth',
        duration: "20%",
        triggerHook: 0.01,
    })
    .setClassToggle('.jnli-right a[href="#sixth"]', 'active')

    .addTo(Navigation)















var ourScene = new ScrollMagic.Scene({
        duration: "50.1%",
        triggerElement: '.jsandco-second',
        triggerHook: 0.5,
    })
    .setClassToggle('.jnli-left a[href="#first"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.jsandco-third',
        triggerHook: 0.99999,
    })
    .setClassToggle('.jnli-left a[href="#second"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.jsandco-fourth',
        triggerHook: 0.99999,
    })
    .setClassToggle('.jnli-left a[href="#third"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "101%",
        triggerElement: '.jsandco-fifth',
        triggerHook: 0.99999,
    })
    .setClassToggle('.jnli-left a[href="#fourth"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "150%",
        triggerElement: '.jsandco-sixth',
        triggerHook: 0.8,
    })
    .setClassToggle('.jnli-left a[href="#fifth"]', 'active')
    .addTo(Navigation)









