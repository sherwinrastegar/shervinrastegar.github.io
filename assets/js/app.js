// Scroll Progress
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  document.getElementById("scrollProgress").style.width = (scrolled / height) * 100 + "%";
});

// Reveal Animations
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); });
}, { threshold: 0.2 });
reveals.forEach(r => observer.observe(r));

// Theme Toggle + Fix Label
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

function updateThemeLabel() {
  const isLight = htmlEl.getAttribute("data-theme") === "light";
  themeToggle.textContent = isLight ? "Light" : "Dark";
}
themeToggle.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-theme");
  htmlEl.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  updateThemeLabel();
});
updateThemeLabel();

// Language Toggle (Simple Placeholder)
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  langToggle.textContent = langToggle.textContent === "EN" ? "FA" : "EN";
});

// Load Projects Preview (Auto from JSON)
fetch("assets/data/projects.json")
  .then(res => res.json())
  .then(data => {
    const preview = document.getElementById("projectsPreview");
    data.slice(0,3).forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.title}" class="proj-thumb">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      `;
      preview.appendChild(card);
    });
  });

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = document.querySelector(".lb-img");
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("proj-thumb")) {
    lbImg.src = e.target.src;
    lightbox.style.display = "flex";
  }
});
document.querySelector(".lb-close").addEventListener("click", () => {
  lightbox.style.display = "none";
});
