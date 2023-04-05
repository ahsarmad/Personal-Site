/* ======= Dark Theme ======= */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously Selected Topic (checking from local storage)

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain current theme that the interface has by validating the dark theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validate if user has previously chosen theme
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Activate/ deactivate theme manually
themeButton.addEventListener("click", () => {
  // Add or remove dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //Save theme and current icon that user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* ======= Menu Shown/ Hidden ======= */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ======= Menu shown ======
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// ======= Menu Hidden ======
/* Validate if constant exists */

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ======= Removing menu profile ======

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // by clicking on nav_links, we remove shown menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ======= Typewriter-effect ======

new Typewriter("#typewriter", {
  strings: [
    "Full-Stack Developer",
    "Mobile Application Engineer",
    "Scrum Practitioner",
    "Committed Team Player",
    "Strategic Problem Solver",
    "Cloud Infrastructure Architect",
    "Passionate Learner",
    "Rock Climber",
    "Multifaceted Developer",
  ],
  autoStart: true,
  loop: true,
  cursor: "|",
});

// Blob

const blob = document.getElementById("blob");
const blobWidth = blob.offsetWidth;
const blobHeight = blob.offsetHeight;

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.style.left = `${clientX - blobWidth / 2}px`;
  blob.style.top = `${clientY - blobHeight / 2}px`;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3500, fill: "forwards" }
  );
};

// Swiper for portfolio

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

// Scroll Up

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

// Scroll Section Active highlight

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const header = document.querySelector(".header");
const threshold = 100;

header.style.opacity = 0.85;

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const bottomThreshold =
    document.documentElement.scrollHeight - window.innerHeight - threshold;

  if (scrollY > threshold && scrollY < bottomThreshold) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// splash

// ? Opening vertically

window.addEventListener("DOMContentLoaded", () => {
  // hide the scrollbar
  document.body.style.overflow = "hidden";

  // Fade-in and slide-up animation for name
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");

  setTimeout(() => {
    firstName.classList.add("active");
  }, 0);

  setTimeout(() => {
    lastName.classList.add("active");
  }, 400);

  // Fade-out and slide-up animation for name
  setTimeout(() => {
    firstName.classList.add("fade");
  }, 4000);

  setTimeout(() => {
    lastName.classList.add("fade");
  }, 4400);

  // Slide up the splash screen after the fade-out and slide-up animations for the words are done
  setTimeout(() => {
    const intro = document.querySelector(".intro");
    intro.style.top = "-100vh";

    // show scrollbar after the splash screen is hidden
    setTimeout(() => {
      document.body.style.overflow = "auto";
      intro.style.display = "none";
    }, 1000);
  }, 5000);
});

window.addEventListener("DOMContentLoaded", () => {
  // hide the scrollbar
  document.body.style.overflow = "hidden";

  // Three.js setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("particles").appendChild(renderer.domElement);

  // Particle geometry and material
  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // Generate particles
  const particles = [];
  for (let i = 0; i < 600; i++) {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(
      Math.random() * window.innerWidth - window.innerWidth / 2,
      Math.random() * window.innerHeight - window.innerHeight / 2,
      -5
    );
    particle.velocity = new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    );
    scene.add(particle);
    particles.push(particle);
  }

  camera.position.z = 5;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    particles.forEach((particle) => {
      particle.position.add(particle.velocity);
      particle.velocity.multiplyScalar(1.005);
    });

    renderer.render(scene, camera);
  };

  animate();
});
