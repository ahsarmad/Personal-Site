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

// Validate if user has previously chosen topic

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

// new Typewriter("#typewriter", {
//   strings: [
//     "Full-Stack Developer",
//     "Mobile Application Engineer",
//     "Scrum Practitioner",
//     "Problem Solver",
//     "Cloud Architect",
//     "Critical Thinker",
//     "Self-Starter",
//     "Passionate Learner",
//     "Tech Enthusiast",
//     "Committed Team Player",
//     "Versatile Developer",
//   ],
//   autoStart: true,
//   loop: true,
//   cursor: "|",
// });
new Typewriter("#typewriter", {
  strings: [
    "[ Full-Stack Developer",
    "[ Mobile Application Engineer",
    "[ Scrum Practitioner",
    "[ Problem Solver",
    "[ Cloud Architect",
    "[ Critical Thinker",
    "[ Self-Starter",
    "[ Passionate Learner",
    "[ Tech Enthusiast",
    "[ Committed Team Player",
    "[ Versatile Developer",
  ],
  autoStart: true,
  loop: true,
  cursor: " ]",
});

console.log("typewriter is working");
