/*gsap.registerPlugin(ScrollTrigger);

const opening = gsap.timeline( {
}); 

opening.from(".apto-background", {
    duration: 3,
    scale: 2,
    filter:"blur(1rem)",
    opacity: 0,
    delay: 2, 
    onComplete: () => {
        document.getElementById("apto-background").classList.add("pulse")
    }
}).from(".apto-logo-text", {
    duration: 2,
    scale: 1,
    filter:"blur(1rem)",
    opacity: 0,
    delay: 1, 
    stagger: 0.2,
})

gsap.from(".logo-apto", {
    scrollTrigger: {
        trigger: ".logo-apto", 
        start: "50% 50%",
        end: "50% 20%",
        pin: true,
        scrub: 1,
        toggleAction: "restart reverse restart reverse",
    }
});

gsap.to(".apto-presentation", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "0% 100%",
        end: "0% 50%",
        scrub: 1,
        toggleAction: "restart reverse restart reverse",
    }
});


const intro = gsap.timeline( {
}); 

intro.from(".intro-text", {
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 50%",
        end: "50% -40%",
        pin: true,
        scrub: 1,
        toggleAction: "restart reverse restart reverse",
        markers: true
    }
});


/*

let mLandscape = gsap.matchMedia(); 

mLandscape.add("(orientation: landscape) and (max-height: 30em)", () => {
    gsap.from(".intro-text", {
        scrollTrigger: {
            trigger: ".intro-text", 
            start: "50% 50%",
            end: "50% -500%",
            pin: true,
            scrub: 1,
            toggleAction: "restart reverse restart reverse",
        }
    });
})


let Landscape = gsap.matchMedia(); 

Landscape.add("(min-width: 42em) and (min-height: 30em)", () => {
    gsap.from(".intro-text", {
        scrollTrigger: {
            trigger: ".intro-text", 
            start: "50% 50%",
            end: "50% -100%",
            pin: true,
            scrub: 1,
            toggleAction: "restart reverse restart reverse",
        }
    });
})*/