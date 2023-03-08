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
          value: 30,
          density: {
            enable: true,
            value_area: 400,
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
            speed: 30,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4559fa",
          opacity: 0.6,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
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
          value: 20,
          density: {
            enable: false,
            value_area: 700,
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
          value: 0,
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
          random: false,
          anim: {
            enable: false,
            speed: 30,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          opacity: 0,
          width: 1,
        },
        move: {
          enable: false,
          speed: 2,
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
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: false,
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
      retina_detect: false,
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
  setupParticles();
});
console.log("Theme setting working properly");

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
console.log("remove menu profile is working");

// ======= Typewriter-effect ======

new Typewriter("#typewriter", {
  strings: [
    "Full-Stack Developer",
    "Mobile Application Engineer",
    "Rock Climbing Enthusiast",
    "Scrum Practitioner",
    "Committed Team Player",
    "Problem Solver",
    "Cloud Architect",
    "Classical Music Admirer",
    "Passionate Learner",
    "Lover of Nature",
    "Tech Enthusiast",
    "Versatile Developer",
    "Hiker",
  ],
  autoStart: true,
  loop: true,
  cursor: "|",
});

console.log("typewriter is working");

// Customize particle color
const particles = document.getElementsByClassName("particles-js-canvas-el")[0];
particles.style.backgroundColor = "rgba(0, 0, 0, 0)";

// Disable click event to add more particles
particles.onclick = function (e) {
  e.preventDefault();
  e.stopPropagation();
};
