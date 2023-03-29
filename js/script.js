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

// Particle options (on dark theme)

const setupParticles = () => {
  if (document.body.classList.contains(darkTheme)) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#4559fa",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: "#4559fa",
          opacity: 0.6,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 30,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  } else {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 0,
          density: {},
        },
        color: {},
        shape: {
          type: "circle",
          stroke: {},
          polygon: {},
        },
        opacity: {
          anim: {},
        },
        size: {
          anim: {},
        },
        line_linked: {},
        move: {
          attract: {},
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
        },
        modes: {
          grab: {
            line_linked: {},
          },
          bubble: {},
          repulse: {},
          push: {},
          remove: {},
        },
      },
    });
  }
};

// Validate if user has previously chosen topic

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );

  setupParticles();
}

//Activate/ deactivate theme manually

themeButton.addEventListener("click", () => {
  // Add or remove dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //Save theme and current icon that user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

  // re-cache canvas element
  particlesCanvas = document.getElementById("particles-js-canvas-el");

  // Set particle options based on theme
  setupParticles();
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
    "Creative Problem Solver",
    "Cloud Architect",
    "Passionate Learner",
    "Rock Climber",
    "Multifaceted Developer",
  ],
  autoStart: true,
  loop: true,
  cursor: "|",
});

// Customize particle color
const particles = document.getElementsByClassName("particles-js-canvas-el")[0];
particles.style.backgroundColor = "rgba(0, 0, 0, 0)";

// Disable click event to add more particles
particles.onclick = function (e) {
  e.preventDefault();
  e.stopPropagation();
};

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

//

const header = document.querySelector(".header");
const threshold = 100;

header.style.opacity = 0.85;

window.addEventListener("scroll", function () {
  if (window.scrollY > threshold) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// fade in effect

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
