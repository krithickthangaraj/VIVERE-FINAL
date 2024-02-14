window.addEventListener('load', () => {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    let timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    };

    let totalSeconds; // Declaring totalSeconds here to make it accessible within the init function

    function init() {
        // Set the target date and time
        const targetDate = new Date('February 28, 2024 08:45:00').getTime();

        totalSeconds = Math.floor((targetDate - Date.now()) / 1000);
        setTimeLeft();

        let interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval);
                console.log('Countdown finished');
                return;
            }
            countTime();
            printTime();
            totalSeconds--;
        }, 1000);
    }

    function countTime() {
        if (timeLeft.s > 0) {
            timeLeft.s--;
        } else {
            timeLeft.s = 59;
            if (timeLeft.m > 0) {
                timeLeft.m--;
            } else {
                timeLeft.m = 59;
                if (timeLeft.h > 0) {
                    timeLeft.h--;
                } else {
                    timeLeft.h = 23;
                    if (timeLeft.d > 0) {
                        timeLeft.d--;
                    }
                }
            }
        }
    }

    function printTime() {
        animateFlip(days, timeLeft.d);
        animateFlip(hours, timeLeft.h);
        animateFlip(minutes, timeLeft.m);
        animateFlip(seconds, timeLeft.s);
    }

    function animateFlip(element, value) {
        const valueInDom = element.querySelector('.bottom-back').innerText;
        const currentValue = value < 10 ? '0' + value : '' + value;

        if (valueInDom === currentValue) return;

        element.querySelector('.top-back span').innerText = currentValue;
        element.querySelector('.bottom-back span').innerText = currentValue;

        gsap.to(element.querySelector('.top'), 0.7, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {
                element.querySelector('.top').innerText = currentValue;
                element.querySelector('.bottom').innerText = currentValue;
                gsap.set(element.querySelector('.top'), { rotationX: 0 });
            }
        });

        gsap.to(element.querySelector('.top-back'), 0.7, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });

    }

    function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
        timeLeft.m = Math.floor(totalSeconds / (60) % 60);
        timeLeft.s = Math.floor(totalSeconds % 60);
    }

    init(); // Call the init function to start the countdown when the page loads
});

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#f00"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#f00",
            "opacity": 0.4,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
