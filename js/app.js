gsap.registerPlugin(ScrollTrigger);

gsap.to(".feature", {
    duration: 1, 
    scrollTrigger: {
        trigger: ".feature", 
        start: "50% 50%",
        end: "50% -100%",
        pin: true,
        scrub: true,
        toggleAction: "restart none none none",
    }
})

/*
let mm = gsap.matchMedia();

gsap.to(".hero-text", {
    y: "120vh",
    fontSize: "8rem",
    opacity: 1,
    duration: 1, 
    ease: "none",
    scrollTrigger: {
        trigger: ".apto-hero", 
        start: "50% 80%",
        end: "50% 30%",
        scrub: true,
        toggleAction: "restart none none none",
        markers: true,
    }
})

mm.add("(min-width: 768px)", () => {

    gsap.to(".hero-text", {
        y: "120vh",
        fontSize: "16rem",
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: ".apto-hero", 
            start: "50% 80%",
            end: "50% 30%",
            scrub: true,
            toggleAction: "restart none none none",
            markers: true,
        }
    })

})
*/