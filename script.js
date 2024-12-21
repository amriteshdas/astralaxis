// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    // Toggle 'open' class on both nav-links and nav-toggle
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
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


