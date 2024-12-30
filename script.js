// Custom Cursor Implementation
// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 15 + 'px';
        cursorFollower.style.top = e.clientY - 15 + 'px';
    }, 100);
});

// Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#f39c12" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#129df3",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});



// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// Array of services
const services = [
    {
        title: "Web Development",
        description: "We build modern, responsive, and fast-loading websites to meet your needs.",
        image: "w1.jpeg"
    },
    {
        title: "Video Editing",
        description: "Professional video editing for ads, social media, and presentations.",
        image: "v2.jpg"
    },
    {
        title: "Graphic Designing",
        description: "Creative graphic design services to bring your ideas to life.",
        image: "g3.jpg"
    },
    {
        title: "Content Writing",
        description: "Engaging and SEO-friendly content for blogs, websites, and businesses.",
        image: "c1.jpg"
    }
];

// DOM Elements
const serviceImage = document.getElementById('service-image');
const serviceDescription = document.getElementById('service-description');

let currentServiceIndex = 0;

function updateService() {
    const nextService = services[currentServiceIndex];

    // Fade out effect
    serviceImage.style.opacity = '0';
    serviceDescription.style.opacity = '0';

    setTimeout(() => {
        // Update content
        serviceImage.src = nextService.image;
        serviceDescription.innerHTML = `
            <h3>${nextService.title}</h3>
            <p>${nextService.description}</p>
        `;

        // Fade-in effect
        serviceImage.style.opacity = '1';
        serviceDescription.style.opacity = '1';

        // Update index
        currentServiceIndex = (currentServiceIndex + 1) % services.length;
    }, 1000); // Wait for fade-out animation
}

// Initial call
updateService();

// Automatically update services every 5 seconds
setInterval(updateService, 3000);

// Project Details
const projects = [
    {
        title: "Recipe Finder",
        description: "A web app to find delicious recipes using ingredients you have.",
        image: "rf.png"
    },
    {
        title: "Weather App",
        description: "Check the current weather and forecast for any location worldwide.",
        image: "wa.png"
    },
    {
        title: "Personal Portfolio",
        description: "My personal portfolio showcasing my skills and work.",
        image: "pf.png"
    }
];

// Modal Elements
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Attach Event Listeners to Project Cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        modalImage.src = projects[index].image;
        modalTitle.textContent = projects[index].title;
        modalText.textContent = projects[index].description;
        modal.style.display = "flex";
    });
});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal when clicking outside content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


