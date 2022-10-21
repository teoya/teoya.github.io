gsap.registerPlugin(ScrollTrigger);

let aptoHero = gsap.timeline({}); 
let aptoIntro = gsap.timeline({}); 
let aptoTech = gsap.timeline({});
let aptoAnimation = gsap.timeline({});
let aptoStory = gsap.timeline({});
let aptoTestimonial = gsap.timeline({});

const apparences = gsap.utils.toArray(".apparence"); 
const apparencesDown = gsap.utils.toArray(".apparence-down"); 
const apparencesSmooth = gsap.utils.toArray(".apparence-smooth"); 
const apparencesText = gsap.utils.toArray(".apparence-text"); 
const sectApps = gsap.utils.toArray(".sect-app");
const sectionTitles = gsap.utils.toArray(".apto-title-section");

ScrollTrigger.saveStyles(".wrapper, .apparence, .apparence-down, .apparence-smooth, .apparence-text, .sect-app, .apto-title-section");

let mLandscape = gsap.matchMedia();

mLandscape.add("(max-width: 42em)", () => {

/* apparence immagini*/

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

/* apparence div lavoro ecc*/

apparencesDown.forEach(apparenceDown => {
    gsap.from(apparenceDown, {
        y: "9vh",
        opacity: 0,
        scrollTrigger: {
            trigger: apparenceDown, 
            scrub: 3,
            start: "50% 100%",
            end: "50% 90%",
        }
    });
      
    
}); 

/* apparence div tech */

apparencesSmooth.forEach(apparenceSmooth => {
    gsap.from(apparenceSmooth, {
        opacity: 0,
        scrollTrigger: {
            trigger: apparenceSmooth, 
            scrub: 3,
            start: "0% 90%",
            end: "0% 70%",
        }
    });
      
    
}); 

/* apparence text-orange*/

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
            start: "0% 95%",
            end: "0% 85%",
        }
    });
      
}); 

/* apparence section */

sectApps.forEach(sectApp => {
    
    gsap.fromTo(sectApp, {
    
        filter: "blur(1em)",
        opacity: 0,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 80%",
            end: "0% 50%",
            scrub: true,
        }
    }, {
        filter: "blur(0em)",
        opacity: 1,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 80%",
            end: "0% 50%",
            scrub: true,
        }
    });
    
    gsap.fromTo(sectApp, {
        
        filter: "blur(0em)",
        opacity: 1,
        immediateRender: false,
        scrollTrigger: {
            trigger: sectApp, 
            start: "100% 60%",
            end: "100% 30%",
            scrub: true,
        }
    },{
        filter: "blur(1em)",
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
            trigger: sectApp, 
            start: "100% 60%",
            end: "100% 30%",
            scrub: true,
        }
    })
});

/* apparence section title */

sectionTitles.forEach(sectionTitle => {

    gsap.from(sectionTitle, {
        filter:"blur(0.5rem)",
        scale: 1.2,
        opacity: 0,
        scrollTrigger: {
            trigger: sectionTitle, 
            start: "50% 50%",
            end: "50% +=25em",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
        } 
    })
});

    /*hero mobile*/

    //aptoHero.clear();

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

    //aptoIntro.clear();

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
        //invalidateOnRefresh: true
    }
}).to(".wrapper", {
    background: "#212529",
    scrollTrigger: {
        trigger: ".apto-intro", 
        start: "50% 30%",
        end: "50% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    },
});

/* apto video */

//aptoTech.clear();

aptoTech.fromTo(".wrapper", {
    background: "#212529",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-feature", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
    } 
}, {
    background: "white",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-feature", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    }
});

/* animazione tech */

//aptoAnimation.clear();

aptoAnimation.to(".interno", {
    x: -50, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".scheletro", {
    x: 10, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".scocca", {
    x: 40, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".piastre", {
    x: 100, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
});

//aptoStory.clear();

aptoStory.fromTo(".wrapper", {
    background: "white",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-compatibilita", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    } 
}, {
    background: "#212529",
    
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-compatibilita", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    }
});

/* cambio back testimonial */

//aptoTestimonial.clear();

aptoTestimonial.fromTo(".wrapper", {
    background: "#212529",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-testimonial", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    } 
}, {
    background: "#EDEDF4",  
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-testimonial", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true

    }
}).from(".apto-acquisto", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".apto-acquisto", 
        start: "0% 50%",
        end: "0% 30%",
        scrub: 1,
    } 
});

ScrollTrigger.refresh();

});



mLandscape.add("(max-height: 30em) and (orientation: landscape)", () => { 

/* apparence immagini*/

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

/* apparence div lavoro ecc*/

apparencesDown.forEach(apparenceDown => {
    gsap.from(apparenceDown, {
        y: "9vh",
        opacity: 0,
        scrollTrigger: {
            trigger: apparenceDown, 
            scrub: 3,
            start: "50% 100%",
            end: "50% 90%",
        }
    });
      
    
}); 

/* apparence div tech */

apparencesSmooth.forEach(apparenceSmooth => {
    gsap.from(apparenceSmooth, {
        opacity: 0,
        scrollTrigger: {
            trigger: apparenceSmooth, 
            scrub: 3,
            start: "0% 90%",
            end: "0% 70%",
        }
    });
      
    
}); 

/* apparence text-orange*/

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
            start: "0% 100%",
            end: "0% 75%",
        }
    });
      
}); 

/* apparence section */

sectApps.forEach(sectApp => {
    
    gsap.fromTo(sectApp, {
    
        filter: "blur(1em)",
        opacity: 0,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 100%",
            end: "0% 50%",
            scrub: true,
        }
    }, {
        filter: "blur(0em)",
        opacity: 1,
        scrollTrigger: {
            trigger: sectApp, 
            start: "0% 100%",
            end: "0% 50%",
            scrub: true,
        }
    });
    
    gsap.fromTo(sectApp, {
        
        filter: "blur(0em)",
        opacity: 1,
        immediateRender: false,
        scrollTrigger: {
            trigger: sectApp, 
            start: "100% 60%",
            end: "100% 30%",
            scrub: true,
        }
    },{
        filter: "blur(1em)",
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
            trigger: sectApp, 
            start: "100% 60%",
            end: "100% 30%",
            scrub: true,
        }
    })
});

/* apparence section title */

sectionTitles.forEach(sectionTitle => {

    gsap.from(sectionTitle, {
        filter:"blur(0.5rem)",
        scale: 1.2,
        opacity: 0,
        scrollTrigger: {
            trigger: sectionTitle, 
            start: "50% 50%",
            end: "50% -20%",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            //markers: true
        } 
    })
});

    /*hero mobile*/

    //aptoHero.clear();

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

    //aptoIntro.clear(); 

aptoIntro.from(".intro-text", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro-text", 
        start: "50% 100%",
        end: "50% 60%",
        scrub: 1,
    }
}).to(".round-circle", {
    opacity: 1,
    scale: 3,
    y: "160vh",
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
        //invalidateOnRefresh: true
    }
}).to(".wrapper", {
    background: "#212529",
    scrollTrigger: {
        trigger: ".apto-intro", 
        start: "50% 30%",
        end: "50% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    },
});

/* apto video */

//aptoTech.clear(); 

aptoTech.fromTo(".wrapper", {
    background: "#212529",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-feature", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    } 
}, {
    background: "white",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-feature", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
    }
});

/* animazione tech */

//aptoAnimation.clear();

aptoAnimation.to(".interno", {
    x: -50, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".scheletro", {
    x: 10, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".scocca", {
    x: 40, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
}).to(".piastre", {
    x: 100, 
    scrollTrigger: {
        trigger: ".img-tecnologia", 
        start: "50% 70%",
        end: "50% 30%",
        scrub: 1,
    }
});

//aptoStory.clear();

aptoStory.fromTo(".wrapper", {
    background: "white",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-compatibilita", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    } 
}, {
    background: "#212529",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-compatibilita", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    }
});

/* cambio back testimonial */

//aptoTestimonial.clear();

aptoTestimonial.fromTo(".wrapper", {
    background: "#212529",
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-testimonial", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    } 
}, {
    background: "#EDEDF4",  
    immediateRender: false,
    scrollTrigger: {
        trigger: ".apto-testimonial", 
        start: "100% 30%",
        end: "100% 20%",
        scrub: 1,
        //invalidateOnRefresh: true
    }
}).from(".apto-acquisto", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".apto-acquisto", 
        start: "0% 50%",
        end: "0% 30%",
        scrub: 1,
    } 
});

ScrollTrigger.refresh();



});


mLandscape.add("(min-width: 42em) and (min-height: 30em)", () => {

    /* apparence immagini*/
    
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
    
    /* apparence div lavoro ecc*/
    
    apparencesDown.forEach(apparenceDown => {
        gsap.from(apparenceDown, {
            y: "9vh",
            opacity: 0,
            scrollTrigger: {
                trigger: apparenceDown, 
                scrub: 3,
                start: "50% 100%",
                end: "50% 90%",
            }
        });
          
        
    }); 
    
    /* apparence div tech */
    
    apparencesSmooth.forEach(apparenceSmooth => {
        gsap.from(apparenceSmooth, {
            opacity: 0,
            scrollTrigger: {
                trigger: apparenceSmooth, 
                scrub: 3,
                start: "0% 90%",
                end: "0% 70%",
            }
        });
          
        
    }); 
    
    /* apparence text-orange*/
    
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
                start: "0% 95%",
                end: "0% 85%",
            }
        });
          
    }); 
    
    /* apparence section */
    
    sectApps.forEach(sectApp => {
        
        gsap.fromTo(sectApp, {
        
            filter: "blur(1em)",
            opacity: 0,
            scrollTrigger: {
                trigger: sectApp, 
                start: "0% 80%",
                end: "0% 50%",
                scrub: true,
            }
        }, {
            filter: "blur(0em)",
            opacity: 1,
            scrollTrigger: {
                trigger: sectApp, 
                start: "0% 80%",
                end: "0% 50%",
                scrub: true,
            }
        });
        
        gsap.fromTo(sectApp, {
            
            filter: "blur(0em)",
            opacity: 1,
            immediateRender: false,
            scrollTrigger: {
                trigger: sectApp, 
                start: "100% 60%",
                end: "100% 30%",
                scrub: true,
            }
        },{
            filter: "blur(1em)",
            opacity: 0,
            immediateRender: false,
            scrollTrigger: {
                trigger: sectApp, 
                start: "100% 60%",
                end: "100% 30%",
                scrub: true,
            }
        })
    });
    
    /* apparence section title */
    
    sectionTitles.forEach(sectionTitle => {
    
        gsap.from(sectionTitle, {
            filter:"blur(0.5rem)",
            scale: 1.2,
            opacity: 0,
            scrollTrigger: {
                trigger: sectionTitle, 
                start: "50% 50%",
                end: "50% +=25em",
                scrub: 1,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
            } 
        })
    });
    
        /*hero mobile*/
    
        //aptoHero.clear();
    
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
    
        //aptoIntro.clear();
    
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
            //invalidateOnRefresh: true
        }
    }).to(".wrapper", {
        background: "#212529",
        scrollTrigger: {
            trigger: ".apto-intro", 
            start: "50% 30%",
            end: "50% 20%",
            scrub: 1,
            //invalidateOnRefresh: true
        },
    });
    
    /* apto video */
    
    //aptoTech.clear();
    
    aptoTech.fromTo(".wrapper", {
        background: "#212529",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".apto-feature", 
            start: "100% 30%",
            end: "100% 20%",
            scrub: 1,
        } 
    }, {
        background: "white",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".apto-feature", 
            start: "100% 30%",
            end: "100% 20%",
            scrub: 1,
            //invalidateOnRefresh: true
        }
    });
    
    /* animazione tech */
    
    //aptoAnimation.clear();
    
    aptoAnimation.to(".interno", {
        x: -50, 
        scrollTrigger: {
            trigger: ".img-tecnologia", 
            start: "50% 70%",
            end: "50% 30%",
            scrub: 1,
        }
    }).to(".scheletro", {
        x: 10, 
        scrollTrigger: {
            trigger: ".img-tecnologia", 
            start: "50% 70%",
            end: "50% 30%",
            scrub: 1,
        }
    }).to(".scocca", {
        x: 40, 
        scrollTrigger: {
            trigger: ".img-tecnologia", 
            start: "50% 70%",
            end: "50% 30%",
            scrub: 1,
        }
    }).to(".piastre", {
        x: 100, 
        scrollTrigger: {
            trigger: ".img-tecnologia", 
            start: "50% 70%",
            end: "50% 30%",
            scrub: 1,
        }
    });
    
    //aptoStory.clear();
    
    aptoStory.fromTo(".wrapper", {
        background: "white",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".apto-compatibilita", 
            start: "100% 30%",
            end: "100% 20%",
            scrub: 1,
            //invalidateOnRefresh: true
        } 
    }, {
        background: "#212529",
        
        immediateRender: false,
        scrollTrigger: {
            trigger: ".apto-compatibilita", 
            start: "100% 30%",
            end: "100% 20%",
            scrub: 1,
            //invalidateOnRefresh: true
        }
    });
    
    /* cambio back testimonial */
    
    //aptoTestimonial.clear();
    
    aptoTestimonial.fromTo(".wrapper", {
        background: "#212529",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".apto-testimonial", 
            start: "100% 30%",
            end: "100% 20%",
            scrub: 1,
            //invalidateOnRefresh: true
        } 
    }, {
        background: "#EDEDF4",  
        immediateRender: false,
        scrollTrigger: {
            trigger: ".apto-testimonial", 
            start: "100% 30%",
            end: "100% 20%",
            scrub: 1,
            //invalidateOnRefresh: true
    
        }
    }).from(".apto-acquisto", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".apto-acquisto", 
            start: "0% 50%",
            end: "0% 30%",
            scrub: 1,
        } 
    });
    
    ScrollTrigger.refresh();
    
    });
