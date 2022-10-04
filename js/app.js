gsap.registerPlugin(ScrollTrigger);

gsap.from(".apto-logo", {
    y: "-100vh",
    opacity: 0,
    width: "200em",
    duration: 1, 
    filter: "blur(4em)",
    ease: "none",
    scrollTrigger: {
        trigger: ".apto-logo", 
        start: "30% 30%",
        end: "1000vh 40%",
        scrub: 1,
        toggleAction: "restart none none none"
    }
})

gsap.from(".payoff", {
    opacity: 0,
    filter: "blur(1rem)",
    filter: "-webkit-blur(1rem)",
    duration: 1, 
    scrollTrigger: {
        trigger: ".payoff", 
        start: "-900vh 70%",
        end: "-700vh 70%",
        scrub: 1,
        toggleAction: "restart none none none"
    }
})

gsap.from(".sub-payoff", {
    opacity: 0,
    filter: "blur(1rem)",
    filter: "-webkit-blur(1rem)",
    duration: 1, 
    scrollTrigger: {
        trigger: ".payoff", 
        start: "-900vh 50%",
        end: "-850vh 50%",
        scrub: 1,
        toggleAction: "restart none none none"
    }
})

gsap.to(".apto-description", {
    filter: "blur(1rem)",
    filter: "-webkit-blur(1rem)",
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-feature", 
        start: "-20% 30%",
        end: "-10% 30%",
        scrub: 1
    }
})


gsap.from(".feature", {
    duration: 1, 
    scrollTrigger: {
        trigger: ".feature", 
        start: "50% 50%",
        end: "50% -20%",
        pin: true,
        scrub: 1,
        toggleAction: "restart none none none",
    }
});

gsap.to(".mascherino", {
    backgroundImage: "radial-gradient(circle at top center, rgba(0, 0, 0,0) 0%, rgba(33, 37, 41, 1) 40%)",
    duration: 1, 
    scrollTrigger: {
        trigger: ".mascherino", 
        start: "50% 15%",
        end: "50% 0%",
        scrub: 1,
    }
})
/*
gsap.from(".feature", {
    duration: 1, 
    //color: "white",
    background: "radial-gradient(circle at 50% 300%, red 0%, #ffffff00 100%);",
    scrollTrigger: {
        trigger: ".feature", 
        start: "50% 50%",
        end: "50% 40%",
        scrub: 1,
        toggleAction: "restart none none none",
        markers: true
    }
   
});/*
gsap.to(".feature", {
    duration: 1, 
    background: "radial-gradient(circle at 50% -300%, black 0%, #ffffff00 100%);",
    scrollTrigger: {
        trigger: ".feature", 
        start: "50% 50%",
        end: "50% -100%",
        pin: true,
        scrub: true,
        toggleAction: "restart none none none"
    }
    
})

*/
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

/*
let backtl = gsap.timeline({
    duration: 1,
    scrollTrigger: {
        trigger: ".apto-description", 
        start: "85% 100%",
        end: "85% 90%",
        scrub: 1,
        toggleAction: "restart none none none",
        markers: true
    }
})

backtl.to(".wrapper", {
    background: "#E53B1A20",
}).to(".wrapper", {
    background: "#E53B1A00",
})

*/