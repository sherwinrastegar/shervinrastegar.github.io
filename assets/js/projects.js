const dictionary = {
  en: {
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Selected works with impactful UI/UX and robust engineering.",
    backLink: "Home",
    p1Title: "Project One — AI Dashboard",
    p1Desc: "A modern analytics dashboard with real‑time insights, crafted for clarity and speed.",
    p2Title: "Project Two — SaaS Landing",
    p2Desc: "High‑conversion landing page with refined micro‑interactions and SEO focus.",
    footerText: "© 2026 Your Name. All rights reserved."
  },
  fa: {
    projectsTitle: "پروژه‌های منتخب",
    projectsSubtitle: "نمونه‌کارهای برگزیده با UI/UX حرفه‌ای و مهندسی قدرتمند.",
    backLink: "خانه",
    p1Title: "پروژه اول — داشبورد هوش مصنوعی",
    p1Desc: "داشبورد تحلیلی مدرن با نمایش لحظه‌ای داده‌ها و تمرکز بر شفافیت و سرعت.",
    p2Title: "پروژه دوم — لندینگ SaaS",
    p2Desc: "لندینگ با نرخ تبدیل بالا، تعاملات ظریف و تمرکز بر سئو.",
    footerText: "© 2026 نام شما. تمامی حقوق محفوظ است."
  }
};

const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

function setTheme(theme){
  if(theme === "light"){
    document.body.classList.add("light");
  }else{
    document.body.classList.remove("light");
  }
  localStorage.setItem("theme", theme);
}

function setLanguage(lang){
  const data = dictionary[lang];
  document.getElementById("projectsTitle").textContent = data.projectsTitle;
  document.getElementById("projectsSubtitle").textContent = data.projectsSubtitle;
  document.getElementById("backLink").textContent = data.backLink;
  document.getElementById("p1Title").textContent = data.p1Title;
  document.getElementById("p1Desc").textContent = data.p1Desc;
  document.getElementById("p2Title").textContent = data.p2Title;
  document.getElementById("p2Desc").textContent = data.p2Desc;
  document.getElementById("footerText").textContent = data.footerText;

  if(lang === "fa"){
    document.body.classList.add("rtl");
    langToggle.textContent = "EN";
  }else{
    document.body.classList.remove("rtl");
    langToggle.textContent = "FA";
  }
  localStorage.setItem("lang", lang);
}

themeToggle.addEventListener("click", () => {
  const current = localStorage.getItem("theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});
langToggle.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "en";
  setLanguage(current === "en" ? "fa" : "en");
});

const storedTheme = localStorage.getItem("theme") || "dark";
const storedLang = localStorage.getItem("lang") || "en";
setTheme(storedTheme);
setLanguage(storedLang);

document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  const dotsContainer = slider.querySelector(".dots");
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if(i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => goTo(i));
  });

  const dots = dotsContainer.querySelectorAll("button");

  function goTo(i){
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");
    index = i;
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  slider.querySelector(".next").addEventListener("click", () => {
    goTo((index + 1) % slides.length);
  });

  slider.querySelector(".prev").addEventListener("click", () => {
    goTo((index - 1 + slides.length) % slides.length);
  });
});
