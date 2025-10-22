document.addEventListener('DOMContentLoaded', function () {

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": { "enable": false }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "repulse": { "distance": 100, "duration": 0.4 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });

    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.2
    });

    scrollElements.forEach(el => observer.observe(el));


    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

});

document.querySelectorAll('.banner .slider .item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxTilt = 15;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        const img = item.querySelector('img');

        img.style.transition = 'transform 0.1s linear';
        img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');

        img.style.transition = 'transform 0.5s ease-in-out';
        img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});


const items = document.querySelectorAll(".slider .item");
let activeIndex = 0;

function setActive(index) {
    items.forEach((el, i) => {
        el.classList.toggle("active", i === index);
    });
}

setActive(activeIndex);

setInterval(() => {
    activeIndex = (activeIndex + 1) % items.length;
    setActive(activeIndex);
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const observers = document.querySelectorAll(".animate-on-scroll, .mandala-container, .shadow-dance");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                entry.target.classList.add("mandala-active");
                entry.target.classList.remove("restart");
                void entry.target.offsetWidth;
                entry.target.classList.add("restart");
            } else {
                entry.target.classList.remove("is-visible");
                entry.target.classList.remove("mandala-active");
            }
        });
    }, { threshold: 0.3 });

    observers.forEach(el => observer.observe(el));
});
