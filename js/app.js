gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

    gsap.to(".hero-text", {
        y: 300,
        fontSize: "16rem",
        opacity: 1,
        duration: 4, 
        scrollTrigger: {
            trigger: ".apto-hero", 
            start: "50% 80%",
            end: "50% 30%",
            scrub: 0.3,
            toggleAction: "restart paused  none none",
            //markers: true,
        }
    })

})

gsap.to(".hero-text", {
    y: 1000,
    fontSize: "16rem",
    opacity: 1,
    duration: 4, 
    scrollTrigger: {
        trigger: ".apto-hero", 
        start: "50% 80%",
        end: "50% 30%",
        scrub: 0.3,
        toggleAction: "restart paused  none none",
        //markers: true,
    }
})

/*
gsap.to(".square", {
    x: 800,
    duration: 4,
    scrollTrigger: {
        trigger: ".square", 
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        toggleAction: "restart none none none",
        markers: true,

        //toggleClass: "bella"
    }
})*/