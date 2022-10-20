
gsap.registerPlugin(ScrollTrigger);

let mLandscape = gsap.matchMedia();

mLandscape.add("(max-width: 42em)", () => {

    /*hero mobile*/

let aptoHero = gsap.timeline({}); 

aptoHero.from(".apto-oggetto", {
    filter: "blur(1rem)",
    opacity: 0,
    scale: 2, 
    duration: 3,
}).from(".apto-title-element", {
    opacity: 0,
    y: "2rem",
    stagger: 0.6,
    duration: 2
},2).to(".apto-presentation", {
    opacity: 0,
    filter: "blur(1em)",
    scrollTrigger: {
        trigger: ".apto-intro", 
        start: "0% 40%",
        end: "0% 20%",
        scrub: 1,
    }
},2)

    /* into text mobile*/

let aptoIntro = gsap.timeline({}); 

aptoIntro.from(".intro-text", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 80%",
        end: "50% 60%",
        scrub: 1,
    }
}).to(".round-circle", {
    opacity: 1,
    scale: 3,
    y: "130vh",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 80%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".round-circle", {
    opacity: 0,
    backgroundColor: "#212529",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 30%",
        end: "50% 20%",
        scrub: 1,
    }
}).to(".wrapper", {
    background: "#212529",
    scrollTrigger: {
        trigger: ".apto-intro", 
        start: "50% 30%",
        end: "50% 20%",
        scrub: 1,
    },
});

/* apto video */

const apparences = gsap.utils.toArray(".apparence"); 

apparences.forEach(apparence => {
    gsap.from(apparence, {
        opacity: 0,
        scrollTrigger: {
            trigger: apparence, 
            scrub: 1,
            start: "50% 80%",
            end: "50% 60%",
        }
    });
      
    
}); 

const apparencesText = gsap.utils.toArray(".apparence-text"); 
apparencesText.forEach(apparenceText => {
    gsap.from(apparenceText, {
        color: "#E53B1A",
        duration: 1,
        opacity: 0,
        scale: 0.6,
        filter: "blur(1em)",
        scrollTrigger: {
            trigger: apparenceText, 
            scrub: 1,
            start: "0% 80%",
            end: "0% 60%",
        }
    });
      
}); 

let aptoVideo = gsap.timeline({});


const sectApps = gsap.utils.toArray(".sect-app");
sectApps.forEach(sectApp => {
    
    gsap.fromTo(sectApp, {
    
        filter: "blur(1em)",
        opacity: 0,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 80%",
            end: "0% 60%",
            scrub: true,
        }
    }, {
        filter: "blur(0em)",
        opacity: 1,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 80%",
            end: "0% 60%",
            scrub: true,
        }
    });
    
    gsap.fromTo(sectApp, {
        
        filter: "blur(0em)",
        opacity: 1,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 80%",
            end: "0% 60%",
            scrub: true,
        }
    },{
        filter: "blur(1em)",
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
            trigger: sectApp, 
            start: "100% 40%",
            end: "100% 20%",
            scrub: true,
        }
    })
})/*
aptoVideo.fromTo(".apto-video", {
    
    filter: "blur(1em)",
    opacity: 0,
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "0% 80%",
        end: "0% 60%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        markers: true
    }
}, {
    
    filter: "blur(0em)",
    opacity: 1,
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "0% 80%",
        end: "0% 60%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        markers: true
    }
}).fromTo(".apto-video", {
    
    filter: "blur(0em)",
    opacity: 1,
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "0% 80%",
        end: "0% 60%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        markers: true
    }
},{
    
    filter: "blur(1em)",
    opacity: 0,
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "100% 40%",
        end: "100% 20%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        markers: true
    }
})*/


//ScrollTrigger.refresh();

/*
gsap.from(".circle", {
    duration: 3,
    opacity: 0,
    //y: "20vh",
    scrollTrigger: {
        trigger: ".circle", 
        toggleActions: "play none none none",
        start: "0% 80%",
        end: "0% 60%",
        markers: true,  
    }
    
})
gsap.from(".tatto", {
    duration: 3,
    opacity: 0,
    //y: "20vh",
    scrollTrigger: {
        trigger: ".tatto", 
        toggleActions: "play none none none",
        start: "0% 80%",
        end: "0% 60%",
        markers: true,        
    }
    
})*/


});

mLandscape.add("(max-height: 30em) and (orientation: landscape)", () => { 
    
let aptoHero = gsap.timeline({}); 

aptoHero.from(".apto-oggetto", {
    filter: "blur(1rem)",
    opacity: 0,
    scale: 2, 
    duration: 3,
}).from(".apto-title-element", {
    opacity: 0,
    y: "2rem",
    stagger: 0.6,
    duration: 2
},2);

    /* into text mobile*/

let aptoIntro = gsap.timeline({}); 

aptoIntro.from(".intro-text", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 60%",
        end: "50% 40%",
        scrub: 1,
    }
}).fromTo(".round-circle", {opacity: 0,}, {
    opacity: 1,
    scale: 3,
    y: "120vh",
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 60%",
        end: "50% 40%",
        scrub: 1,
    }
}).to(".round-circle", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 40%",
        end: "50% 20%",
        scrub: 1,
    }
})
});



/* video mobile */
/*
let aptoVideo = gsap.timeline(); 

    aptoVideo.to(".wrapper", {
        background: "#212529",
        scrollTrigger: {
            trigger: ".apto-intro", 
            start: "50% 30%",
            end: "50% 20%",
            scrub: 1,
        },
}).to(".video-text", {
    filter: "blur(0.25rem)",
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".video-text", 
        start: "0% 35%",
        end: "0% 0%",
        scrub: 1,
        immediateRender: true
    }
})
.to(".video-presentation", {
    filter: "blur(0.25rem)",
    opacity: 0,
    scrollTrigger: {
        trigger: ".video-presentation", 
        start: "100% 80%",
        end: "100% 60%",
        scrub: 1,
        immediateRender: true
    }
}).from(".circle", {
    opacity: 0, 
    filter: "blur(0.25rem)",
    y: "4em",
    scrollTrigger: {
        trigger: ".circle", 
        start: "100% 90%",
        end: "100% 70%",
        scrub: 1,
        immediateRender: true
    }
}).from(".interfaccia", {
    opacity: 0, 
    filter: "blur(0.25rem)",
    x: "-8em",
    scrollTrigger: {
        trigger: ".interfaccia", 
        start: "100% 90%",
        end: "100% 70%",
        scrub: 1,
        immediateRender: true
    }
}).from(".tatto", {
    opacity: 0, 
    filter: "blur(0.25rem)",
    y: "4em",
    scrollTrigger: {
        trigger: ".tatto", 
        start: "100% 90%",
        end: "100% 70%",
        scrub: 1,
        immediateRender: true
    }
}).from(".ergonomia", {
    opacity: 0, 
    filter: "blur(0.25rem)",
    x: "8em",
    scrollTrigger: {
        trigger: ".ergonomia", 
        start: "100% 90%",
        end: "100% 70%",
        scrub: 1,
        immediateRender: true
    }
})


gsap.to(".apto-video", {
    opacity: 0, 
    filter: "blur(0.25rem)",
    scrollTrigger: {
        trigger: ".apto-video", 
        start: "100% 65%",
        end: "100% 45%",
        scrub: 1,
        immediateRender: true,
        //markers: true
    }
});*/

    /* immediato mobile */
/*
    let aptoImmediato = gsap.timeline( {    }); 
    
    aptoImmediato.from(".apto-immediato p", {
        duration: 3,
        filter:"blur(1rem)",
        opacity: 0,
        fontSize: 30,
        stagger: 0.1,
        delay: 1,
        y: "9vh",
        scrollTrigger: {
            trigger: ".apto-immediato > .box-inside", 
            start: "50% 50%",
            end: "50% 0%",
            scrub: 1,
            pin: true,
            pinSpacing: false,

        } 
    }).from(".tablet", {
        opacity: 0, 
        filter: "blur(0.25rem)",
        x: "-8em",
        scrollTrigger: {
            trigger: ".tablet", 
            start: "100% 90%",
            end: "100% 70%",
            scrub: 1,
        }
    }).from(".stretta", {
        opacity: 0, 
        filter: "blur(0.25rem)",
        x: "8em",
        scrollTrigger: {
            trigger: ".stretta", 
            start: "100% 90%",
            end: "100% 70%",
            scrub: 1,
        }
    })
*/
    /* istruzioni mobile */
/*
    let aptoHero = gsap.timeline({}); 

    aptoHero.from("#apto-background", {
        filter: "blur(1rem)",
        opacity: 0,
        scale: 2, 
        duration: 3,
        ease: "power1", 
        onComplete: () => {
            document.getElementById("apto-background").classList.add("pulse");
    
            gsap.to("#apto-background", {
                opacity: 0,
                scale: 1,
                filter: "blur(1rem)",
                scrollTrigger: {
                    trigger: ".apto-intro", 
                    start: "-20% 50%",
                    end: "-10% 50%",
                    scrub: 1, 
                }
            })
    
        } 
    }).from(".apto-logo-text", {
        filter: "blur(1rem)",
        opacity: 0, 
        scale: 1.2, 
        duration: 2,
        stagger: 0.2,
        ease: "power1",
    }).to(".logo-apto", {
        scrollTrigger: {
            trigger: ".logo-apto", 
            start: "50% 50%",
            end: "150% 50%",
            pin: true,
            scrub: 1,
        }
    }).to(".logo-apto", {
        opacity: 0,
        filter: "blur(1rem)",
        scrollTrigger: {
            trigger: ".apto-intro", 
            start: "-20% 50%",
            end: "0% 50%",
            scrub: 1
        }
    });

    let aptoIntro = gsap.timeline({}); 

        aptoIntro.from(".intro-text", {
            scrollTrigger: {
                trigger: ".intro-text", 
                start: "50% 50%",
                end: "50% -150%",
                pin: true,
                scrub: 1,
                
            }
        }).from(".intro-text", {
            color: "white",
            scrollTrigger: {
                trigger: ".intro-text", 
                start: "50% 50%",
                end: "50% 30%",
                scrub: 1,
            }
        }).to(".wrapper", {
            backgroundColor: "black",
            scrollTrigger: {
                trigger: ".apto-intro", 
                start: "50% 50%",
                end: "50% 30%",
                scrub: 1,
                //markers: true
            }
        })

});


/*
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
        toggleAction: "restart reverse restart reverse"
    }
});

gsap.from(".sub-apto", {
    opacity: 0,
    filter: "blur(1rem)",
    duration: 1, 
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".sub-apto", 
        start: "-800vh 80%",
        end: "-600vh 80%",
        scrub: 1,
        toggleAction: "restart reverse restart reverse",    
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
    }
});

const InstructionTl = gsap.timeline( {
    scrollTrigger: {
        trigger: ".container-title-instruction", 
        start: "0% 45%",
        end: "0% -20%",
        scrub: 1,
        pin: true,
        toggleAction: "restart reverse restart reverse",
    }
}); 

InstructionTl.from(".title-instruction", {
    duration: 3,
    filter:"blur(1rem)",
    opacity: 0,
    fontSize: 40,
    stagger: 0.1,
    delay: 1,
    y: "9vh", 
}).to(".title-instruction", {
    duration: 1,
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
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
        toggleAction: "restart reverse restart reverse",
    }
});

const TechnologyTl = gsap.timeline( {
    scrollTrigger: {
        trigger: ".container-title-technology", 
        start: "0% 45%",
        end: "0% -20%",
        scrub: 1,
        pin: true,
        //toggleAction: "restart none none none",
    }
}); 

TechnologyTl.from(".title-technology", {
    duration: 3,
    filter:"blur(1rem)",
    opacity: 0,
    fontSize: 40,
    stagger: 0.1,
    delay: 1,
    y: "9vh", 
}).to(".title-technology", {
    duration: 1,
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
        //toggleAction: "restart none none none",
    }
})

gsap.from(".container-technology", {
    filter:"blur(1rem)",
    opacity: 0,
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "0% 80%",
        end: "0% 50%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
});

gsap.to(".interno", {
    x: -50, 
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "0% 70%",
        end: "0% 30%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
});

gsap.to(".scheletro", {
    x: 10, 
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "0% 70%",
        end: "0% 30%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
});

gsap.to(".scocca", {
    x: 40, 
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "0% 70%",
        end: "0% 30%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
});

gsap.to(".piastre", {
    x: 100, 
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "0% 70%",
        end: "0% 30%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
});

gsap.to(".esploso", {
    transform: "scale(8)",
    filter: "blur(1rem)", 
    opacity: 0,
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "50% 30%",
        end: "50% 0%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
    
});

gsap.to(".esploso-text", {
    filter: "blur(1rem)", 
    opacity: 0,
    duration: 1, 
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "50% 70%",
        end: "50% 30%",
        stagger: 0.2,
        scrub: 1,
        //toggleAction: "restart none none none",
    }
});

const CompatibilityTl = gsap.timeline( {
    scrollTrigger: {
        trigger: ".container-title-compatibility", 
        start: "0% 45%",
        end: "0% -20%",
        scrub: 1,
        pin: true,
        //toggleAction: "restart none none none",
    }
}); 

CompatibilityTl.from(".title-compatibility", {
    duration: 3,
    filter:"blur(1rem)",
    opacity: 0,
    fontSize: 40,
    stagger: 0.1,
    delay: 1,
    y: "9vh", 
}).to(".title-compatibility", {
    duration: 1,
    filter:"blur(1rem)",
    opacity: 0,
    stagger: 0,
    y: "0vh",
    delay: 3 
});

const AppTl = gsap.timeline( {repeat: -1, repeatDelay: 2, ease: "power2"}); 

AppTl.to(".finder", {
    duration: 2,
    x: -150, 
    zIndex: 0,
    transform: "scale(0.5)",
}).to(".uniranking", {
    duration: 2,
    x: 140, 
    zIndex: 0,
    transform: "scale(0.5)",
}, "-=2").to(".linkup", {
    duration: 2,
    x: 0, 
    zIndex: 5,
    transform: "scale(1)",
}, "-=2").to(".finder", {
    duration: 2,
    x: 140, 
    zIndex: 0,
    transform: "scale(0.5)",
    delay: 2
}).to(".uniranking", {
    duration: 2,
    x: 0, 
    zIndex: 5,
    transform: "scale(1)",
    delay: 0
}, "-=2").to(".linkup", {
    duration: 2,
    x: -140, 
    zIndex: 0,
    transform: "scale(0.5)",
    delay:0
}, "-=2").to(".finder", {
    duration: 2,
    x: 0, 
    zIndex: 5,
    transform: "scale(1)",
    delay: 2
}).to(".uniranking", {
    duration: 2,
    x: -140, 
    zIndex: 0,
    transform: "scale(0.5)",
    delay: 0
}, "-=2").to(".linkup", {
    duration: 2,
    x: 140, 
    zIndex: 0,
    transform: "scale(0.5)",
    delay: 0
}, "-=2")

AppTl.to(".finder", {
    duration: 1,
    x: 0, 
    zIndex: 5,
    transform: "scale(1)",
}).to(".uniranking", {
    duration: 1,
    x: -100, 
    transform: "scale(0.5)",
}, "-=1").to(".linkup", {
    duration: 1,
    x: 100, 
    transform: "scale(0.5)",
}, "-=1").to(".finder", {
    duration: 1,
    x: -100, 
    transform: "scale(0.5)",
}).to(".uniranking", {
    duration: 1,
    x: 100, 
    transform: "scale(0.5)",
}, "-=1").to(".linkup", {
    duration: 1,
    x: 0, 
    zIndex: 5,
    transform: "scale(1)",
}, "-=2").to(".finder", {
    duration: 1,
    x: 100, 
    transform: "scale(0.5)",
}).to(".uniranking", {
    duration: 1,
    x: 0, 
    zIndex: 5,
    transform: "scale(1)",
}, "-=1").to(".linkup", {
    duration: 1,
    x: -100, 
    transform: "scale(0.5)",
}, "-=2")


.to(".finder", {
    x: 100,
    duration: 1,
    delay: 2,  
}).to(".uniranking", {
    x: 100,
    duration: 1,
    delay: 2,  
    transform: "scale(0.5)"
}).to(".finder", {
    x: 0,
    transform: "scale(1)",
    duration: 1,
    delay: 2,  
}).to(".uniranking", {
    x: 0,
    duration: 1,
    delay: 2,  
    transform: "scale(1)"
})


gsap.to(".apto-technology-title", {
    backgroundColor: "#212529",
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "50% 50%",
        end: "50% 30%",
        scrub: 1,
        toggleAction: "restart none none none",
    }
});

gsap.to(".apto-technology", {
    backgroundColor: "#212529",
    scrollTrigger: {
        trigger: ".apto-technology", 
        start: "50% 50%",
        end: "50% 30%",
        scrub: 1,
        toggleAction: "restart none none none",
    }
});*/


