// Smooth Scrolling for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Active Navbar Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Typing Effect for Hero Section
const text = "Empower Your Brand's Evolution with Strategic Marketing";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.querySelector(".leftsection").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".leftsection");
  if (heroText) {
    heroText.innerHTML = "";
    typeEffect();
  }
});

// Scroll to Hero Section from Home button
function goToHero() {
  document.querySelector(".firstsection").scrollIntoView({
    behavior: "smooth"
  });
}
