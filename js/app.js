gsap.registerPlugin(ScrollTrigger);

const aptoHero = gsap.timeline({}); 
const aptoIntro = gsap.timeline({}); 
const aptoTech = gsap.timeline({});
const aptoAnimation = gsap.timeline({});
const aptoStory = gsap.timeline({});
const aptoTestimonial = gsap.timeline({});
const aptoSmooth = gsap.timeline({});

let apparences = gsap.utils.toArray(".apparence"); 
let apparencesDown = gsap.utils.toArray(".apparence-down"); 
let apparencesSmooth = gsap.utils.toArray(".apparence-smooth"); 
let apparencesText = gsap.utils.toArray(".apparence-text"); 
let apparencesTextDesk = gsap.utils.toArray(".apparence-text-desk");
let apparencesTextNormal = gsap.utils.toArray(".apparence-text-normal");
let sectApps = gsap.utils.toArray(".sect-app");
let sectionTitles = gsap.utils.toArray(".apto-title-section");

ScrollTrigger.saveStyles(".wrapper, .apparence, .apparence-down, .apparence-smooth, .apparence-text, .sect-app, .apto-title-section, .apto-oggetto, .apto-title-element, .apto-presentation, .intro-text, .round-circle, .interno, .scheletro, .scocca, .piastre, .apto-acquisto");

ScrollTrigger.matchMedia({
    "all": () => {
        gsap.from(".apto-oggetto", {
            filter: "blur(1rem)",
            opacity: 0,
            scale: 2, 
            duration: 3,
            invalidateOnRefresh: true
        });
        gsap.from(".apto-title-element", {
            opacity: 0,
            y: "2rem",
            stagger: 0.6,
            duration: 2,
            invalidateOnRefresh: true
        },2);

                /* apparence section title */
        
                sectionTitles.forEach(sectionTitle => {
                    gsap.fromTo(sectionTitle, {
                        filter:"blur(0.5rem)",
                        scale: 1.2,
                        opacity: 0,
                    }, {
                        filter:"blur(0rem)",
                        scale: 1,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: sectionTitle, 
                            start: "50% 50%",
                            end: "50% 20%",
                            scrub: 1,
                        } 
                    })
                });
    },
    "(max-width: 42em)" : () => {

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
        
            /*hero mobile*/
        
        aptoHero.to(".apto-presentation", {
            opacity: 0,
            filter: "blur(1em)",
            scrollTrigger: {
                trigger: ".apto-intro", 
                start: "0% 40%",
                end: "0% 20%",
                scrub: 1,
                invalidateOnRefresh: true
            }
        },2)
        
            /* into text mobile*/

        
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
            }
        });
        
        /* animazione tech */
        
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
        
        aptoStory.fromTo(".wrapper", {
            background: "white",
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-compatibilita", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
            } 
        }, {
            background: "#212529",
            
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-compatibilita", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
            }
        });
        
        /* cambio back testimonial */
        
        aptoTestimonial.fromTo(".wrapper", {
            background: "#212529",
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-testimonial", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
                } 
        }, {
            background: "#EDEDF4",  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-testimonial", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1        
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
        
    },
        
    "(max-height: 30em) and (orientation: landscape)": () => { 
        
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
        
            /*hero mobile*/
        
        aptoHero.to(".apto-presentation", {
            opacity: 0,
            filter: "blur(1em)",
            scrollTrigger: {
                trigger: ".apto-intro", 
                start: "0% 40%",
                end: "0% 20%",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        },2)
        
            /* into text mobile*/
        
            aptoIntro.clear(); 
        
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
            }
        });
        
        /* animazione tech */
        
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
        
        aptoStory.fromTo(".wrapper", {
            background: "white",
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-compatibilita", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
            } 
        }, {
            background: "#212529",
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-compatibilita", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
            }
        });
        
        /* cambio back testimonial */
        
        aptoTestimonial.fromTo(".wrapper", {
            background: "#212529",
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-testimonial", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
            } 
        }, {
            background: "#EDEDF4",  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".apto-testimonial", 
                start: "100% 30%",
                end: "100% 20%",
                scrub: 1,
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
        
        },
        
        
        "(min-width: 42em) and (max-width: 50em) and (min-height: 30em)": () => {
        
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
        
                /*hero mobile*/
            
            aptoHero.to(".apto-presentation", {
                opacity: 0,
                filter: "blur(1em)",
                scrollTrigger: {
                    trigger: ".apto-intro", 
                    start: "0% 40%",
                    end: "0% 20%",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            },2)
            
                /* into text mobile*/
            
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
                }
            });
            
            /* animazione tech */
            
            aptoAnimation.to(".interno", {
                x: -80, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            }).to(".scheletro", {
                x: 16, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            }).to(".scocca", {
                x: 70, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            }).to(".piastre", {
                x: 160, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            });
            
            aptoStory.fromTo(".wrapper", {
                background: "white",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-compatibilita", 
                    start: "100% 30%",
                    end: "100% 20%",
                    scrub: 1
                } 
            }, {
                background: "#212529",
                
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-compatibilita", 
                    start: "100% 30%",
                    end: "100% 20%",
                    scrub: 1
                }
            });
            
            /* cambio back testimonial */
            
            aptoTestimonial.fromTo(".wrapper", {
                background: "#212529",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-testimonial", 
                    start: "100% 30%",
                    end: "100% 20%",
                    scrub: 1
                } 
            }, {
                background: "#EDEDF4",  
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-testimonial", 
                    start: "100% 30%",
                    end: "100% 20%",
                    scrub: 1            
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
            
        },
        
        "(min-width: 50em) and (min-height: 30em)": () => {
        
            /* apparence immagini*/

            apparences.forEach(apparence => {
                gsap.from(apparence, {
                    opacity: 0,
                    y: "30vh",
                    scrollTrigger: {
                        trigger: apparence, 
                        scrub:1,
                        start: "0% 100%",
                        end: "0% 70%",
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
            
            /* apparence text-orange*/
            
            apparencesTextNormal.forEach(apparenceTextNormal => {
                gsap.from(apparenceTextNormal, {
                    color: "#E53B1A",
                    duration: 1,
                    opacity: 0,
                    scale: 0.6,
                    filter: "blur(1em)",
                    scrollTrigger: {
                        trigger: apparenceTextNormal, 
                        scrub: 3,
                        start: "0% 95%",
                        end: "0% 75%",
                    }
                });
                  
            }); 

            apparencesTextDesk.forEach(apparenceTextDesk => {
                gsap.from(apparenceTextDesk, {
                    color: "#E53B1A",
                    duration: 1,
                    opacity: 0,
                    scale: 0.6,
                    filter: "blur(1em)",
                    scrollTrigger: {
                        trigger: apparenceTextDesk, 
                        scrub: 1,
                        start: "50% 70%",
                        end: "50% 50%",
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
                        scrub: 3,
                    }
                }, {
                    filter: "blur(0em)",
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectApp, 
                        start: "0% 100%",
                        end: "0% 50%",
                        scrub: 3,
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
                        scrub: 3,
                    }
                },{
                    filter: "blur(1em)",
                    opacity: 0,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: sectApp, 
                        start: "100% 60%",
                        end: "100% 30%",
                        scrub: 3,
                    }
                })
            });
            
                /*hero mobile*/
            
            
            aptoHero.to(".apto-presentation", {
                opacity: 0,
                filter: "blur(1em)",
                scrollTrigger: {
                    trigger: ".apto-intro", 
                    start: "0% 60%",
                    end: "0% 30%",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            },2)
            
                /* into text mobile*/
            
            aptoIntro.fromTo(".intro-text", {
                opacity: 0,
                },{
                    opacity: 1,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".intro-text", 
                        start: "50% 90%",
                        end: "50% 60%",
                        scrub: 1,
                    }
            }).fromTo(".round-circle", 
            {
                opacity: 0,
                scale: 1,
                y: 0,
                }, {
                opacity: 1,
                scale: 5,
                y: "150vh",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".intro-text", 
                    start: "50% 60%",
                    end: "50% 0%",
                    scrub: 1,
    
                }
            }).to(".wrapper", {
                background: "#212529",
                scrollTrigger: {
                    trigger: ".apto-intro", 
                    start: "50% 30%",
                    end: "50% 0%",
                    scrub: 1,
                },
            }).fromTo(".apto-intro", {
                opacity: 1,
                },{
                    opacity: 0,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".apto-intro", 
                        start: "100% 100%",
                        end: "100% 60%",
                        scrub: 1,
    
                    }
            });
            
            /* apto video */
            
            aptoTech.fromTo(".wrapper", {
                background: "#212529",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-feature", 
                    start: "100% 30%",
                    end: "100% 0%",
                    scrub: 1,
                } 
            }, {
                background: "white",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-feature", 
                    start: "100% 30%",
                    end: "100% 0%",
                    scrub: 1,
                }
            });
            
            /* animazione tech */
            
            aptoAnimation.to(".interno", {
                x: -80, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            }).to(".scheletro", {
                x: 16, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            }).to(".scocca", {
                x: 70, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            }).to(".piastre", {
                x: 160, 
                scrollTrigger: {
                    trigger: ".img-tecnologia", 
                    start: "50% 70%",
                    end: "50% 30%",
                    scrub: 1,
                }
            });

                aptoSmooth.from(".apparence-smooth-desk-1", {
                    opacity: 0,
                    y: "10vh",
                    scrollTrigger: {
                        trigger: ".apparence-smooth-desk-1", 
                        scrub: 1,
                        start: "0% 110%",
                        end: "0% 90%",
                    }
                }).from(".apparence-smooth-desk-2", {
                    opacity: 0,
                    y: "10vh",
                    scrollTrigger: {
                        trigger: ".apparence-smooth-desk-2", 
                        scrub: 1,
                        start: "0% 100%",
                        end: "0% 70%",
                    }
                }).from(".apparence-smooth-desk-3", {
                    opacity: 0,
                    y: "10vh",
                    scrollTrigger: {
                        trigger: ".apparence-smooth-desk-3", 
                        scrub: 1,
                        start: "0% 80%",
                        end: "0% 50%",
                    }
                });
        
            aptoStory.fromTo(".wrapper", {
                background: "white",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-compatibilita", 
                    start: "100% 30%",
                    end: "100% 0%",
                    scrub: 1,
                } 
            }, {
                background: "#212529",
                
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-compatibilita", 
                    start: "100% 30%",
                    end: "100% 0%",
                    scrub: 1,
                }
            });
            
            /* cambio back testimonial */
            
            aptoTestimonial.fromTo(".wrapper", {
                background: "#212529",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-testimonial", 
                    start: "100% 30%",
                    end: "100% 0%",
                    scrub: 1,
                } 
            }, {
                background: "#EDEDF4",  
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".apto-testimonial", 
                    start: "100% 30%",
                    end: "100% 0%",
                    scrub: 1,            
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
            
        }

});

document.addEventListener("wheel", () => ScrollTrigger.update());