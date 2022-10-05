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
});

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
});

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
});

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
});


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
});

gsap.from(".apto-video", {
    opacity: 0, 
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
    }
});

gsap.from(".video", {
    height: "200vh",
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "10% 70%",
        end: "10% 60%",
        scrub: 1,
    }
});

gsap.to(".video-cta", {
    filter:"-webkit-blur(1rem)",
    filter:"blur(1rem)",
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "100% 70%",
        end: "100% 40%",
        scrub: 1,
        markers: true,
        toggleAction: "restart none none none",
    }
})