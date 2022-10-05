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
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-description", 
        start: "80% 40%",
        end: "90% 40%",
        scrub: 1,
        toggleAction: "restart none none none", 
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
    backgroundImage: "linear-gradient(rgba(0, 0, 0,0) 0%, rgba(33, 37, 41, 1) 40%)",
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
        start: "top 65%",
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
    filter:"blur(1rem)",
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "100% 70%",
        end: "100% 40%",
        scrub: 1,
        toggleAction: "restart none none none",
    }
});

const InstructionTl = gsap.timeline( {
    duration: 1,
    scrollTrigger: {
        trigger: ".container-title-instruction", 
        start: "0% 45%",
        end: "0% -20%",
        scrub: 1,
        pin: true,
        toggleAction: "restart none none none",
    }
}); 

InstructionTl.from(".title-instruction", {
    filter:"blur(1rem)",
    opacity: 0,
    fontSize: 40,
    stagger: 0.1,
    delay: 1,
    y: "9vh", 
}).to(".title-instruction", {
    filter:"blur(1rem)",
    opacity: 0,
    stagger: 0,
    y: "0vh",
    delay: 3 
});

gsap.from(".container-instruction", {
    filter:"blur(1rem)",
    opacity: 0,
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-instruction", 
        start: "0% 80%",
        end: "0% 50%",
        stagger: 0.2,
        scrub: 1,
        toggleAction: "restart none none none",
    }
});

gsap.to(".apto-instruction-title", {
    color: "#EDEDF4",
    backgroundColor: "#EDEDF4",
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-instruction", 
        start: "100% 50%",
        end: "100% 30%",
        stagger: 0.2,
        scrub: 1,
        toggleAction: "restart none none none",
    }
});

gsap.to(".apto-instruction", {
    color: "#EDEDF4",
    backgroundColor: "#EDEDF4",
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-instruction", 
        start: "100% 50%",
        end: "100% 30%",
        stagger: 0.2,
        scrub: 1,
        toggleAction: "restart none none none",
    }
});

const TechnologyTl = gsap.timeline( {
    duration: 1,
    scrollTrigger: {
        trigger: ".container-title-technology", 
        start: "0% 45%",
        end: "0% -20%",
        scrub: 1,
        pin: true,
        toggleAction: "restart none none none",
        //markers: true
    }
}); 

TechnologyTl.from(".title-technology", {
    filter:"blur(1rem)",
    opacity: 0,
    fontSize: 40,
    stagger: 0.1,
    delay: 1,
    y: "9vh", 
}).to(".title-technology", {
    filter:"blur(1rem)",
    opacity: 0,
    stagger: 0,
    y: "0vh",
    delay: 3 
});


gsap.from(".apto-technology-title", {
    backgroundColor: "#212529",
    scrollTrigger: {
        trigger: ".apto-technology-title", 
        start: "0% 50%",
        end: "0% 30%",
        stagger: 0.2,
        scrub: 1,
        toggleAction: "restart none none none",
        markers: true
    }
})