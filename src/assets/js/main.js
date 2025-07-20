(function ($) {
    ("use strict");
    /* -----------------------------------------------------
    LOADER
    ----------------------------------------------------- */
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader-wrapper");
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    });

    /* -----------------------------------------------------
    THEME TOGGLE
    ----------------------------------------------------- */
    window.addEventListener("load", () => {
        const html = document.documentElement;
        const toggle = document.querySelector(".theme-toggle");

        // Apply stored theme on load
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            html.classList.add("dark");
            if (toggle) toggle.checked = true;
        } else {
            html.classList.remove("dark");
            if (toggle) toggle.checked = false;
        }

        // Handle toggle switch
        if (toggle) {
            toggle.addEventListener("change", function () {
                if (this.checked) {
                    html.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                    console.log("Dark mode enabled");
                } else {
                    html.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                    console.log("Light mode disabled");
                }
            });
        }
    });

    /* -----------------------------------------------------
    HERO SLIDER 1
    ----------------------------------------------------- */
    var heroSlider1 = new Swiper(".hero-slider-1-thumbs", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true
    });
    var heroSlider1Thumbs = new Swiper(".hero-slider-1", {
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: false,
                translate: ["-120%", 0, -500]
            },
            next: {
                shadow: false,
                translate: ["120%", 0, -500]
            }
        },
        loop: true,
        spaceBetween: 50,
        thumbs: {
            swiper: heroSlider1
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 1
    ----------------------------------------------------- */
    var moviesSlider1 = new Swiper(".cdx-movies-slider-1", {
        freeMode: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4.5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 1.5,
                freeMode: false
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2.5
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 3.5
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 4.5
            }
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 2
    ----------------------------------------------------- */
    var moviesSlider2 = new Swiper(".cdx-movies-slider-2", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400]
            },
            next: {
                translate: ["100%", 0, 0]
            },
            current: {
                translate: [0, 0, 0],
                opacity: 1,
                scale: 0.5 // You can adjust this for zoom effect
            }
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 3
    ----------------------------------------------------- */
    var moviesSlider3 = new Swiper(".cdx-movies-slider-3", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4.5,
        speed: 1500,
        autoplay: {
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 2.2,
                freeMode: false
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2.5
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 3.5
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 5.7
            }
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 4
    ----------------------------------------------------- */
    var moviesSlider4 = new Swiper(".cdx-movies-slider-4", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4.5,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 1.3,
                freeMode: false
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2.5
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 3.5
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3.7
            }
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 5
    ----------------------------------------------------- */
    var moviesSlider5 = new Swiper(".cdx-movies-slider-5", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4.5,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 1.2,
                freeMode: false
            },
            575: {
                spaceBetween: 10,
                slidesPerView: 2.2,
                freeMode: false
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2.5
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 3.5
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3.7
            }
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 6 
    ----------------------------------------------------- */
    var moviesSlider6 = new Swiper(".cdx-movies-slider-6", {
        slidesPerView: "auto",
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        freeMode: true,
        freeModeMomentum: false,
        speed: 4000,
        breakpoints: {
            0: {
                spaceBetween: 10
            },
            768: {
                spaceBetween: 20
            },
            1200: {
                spaceBetween: 40
            }
        }
    });

    /* -----------------------------------------------------
    MOVIES SLIDER 7 
    ----------------------------------------------------- */
    var moviesSlider7 = new Swiper(".cdx-movies-slider-7", {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        speed: 1500,
        freeModeMomentum: false,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400]
            },
            next: {
                translate: ["100%", 0, 0]
            }
        }
    });

    /* -----------------------------------------------------
    USER SLIDER 1 
    ----------------------------------------------------- */
    var moviesSlider6 = new Swiper(".cdx-users-slider-1", {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        freeMode: true,
        freeModeMomentum: false,
        speed: 4000
    });

    /* -----------------------------------------------------
    TESTIMONIAL SLIDER 1
    ----------------------------------------------------- */
    var testimonialSlider1 = new Swiper(".cdx-testimonial-slider-1", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    /* -----------------------------------------------------
    NEWS SLIDER 1
    ----------------------------------------------------- */
    var newsSlider1 = new Swiper(".cdx-news-slider-1", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                spaceBetween: 15,
                slidesPerView: 1.2,
                freeMode: false
            },
            575: {
                spaceBetween: 15,
                slidesPerView: 2.1,
                freeMode: false
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 1.8
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 2.2
            },
            1100: {
                spaceBetween: 30,
                slidesPerView: 2.5
            },

            1500: {
                spaceBetween: 40,
                slidesPerView: 2.7
            }
        }
    });

    /* -----------------------------------------------------
    PLAY VIDEO
    ----------------------------------------------------- */
    function setupVideoPlayers(containerClass = "video-play", options = {}) {
        const containers = document.querySelectorAll(`.${containerClass}`);

        containers.forEach((container) => {
            const video = container.querySelector("video");
            const playButton = container.querySelector(".play-button");

            if (video && playButton) {
                playButton.addEventListener("click", () => {
                    if (video.paused) {
                        video.play();
                        video.classList.add(options.playingClass || "playing");
                    }
                });

                video.addEventListener("click", () => {
                    if (!video.paused) {
                        video.pause();
                        video.classList.remove(options.playingClass || "playing");
                    }
                });

                video.addEventListener("play", () => {
                    playButton.style.visibility = "hidden";
                });

                video.addEventListener("pause", () => {
                    playButton.style.visibility = "visible";
                });
            } else {
                console.warn("Video or play button not found in:", container);
            }
        });
    }

    // Run this after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
        setupVideoPlayers("video-play", { playingClass: "playing" });
    });
})(jQuery);
