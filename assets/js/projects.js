const progress = document.getElementById("scrollProgress");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const root = document.documentElement;

const i18n = {
  fa: {
    brand_name: "مهندس مکاترونیک",
    brand_tag: "پژوهشگر دیپ‌لرنینگ",
    lang_btn: "EN",
    theme_btn: "تاریک",
    back_home: "بازگشت",
    projects_page_title: "گالری پروژه‌ها و جزئیات فنی",
    projects_page_desc: "در این صفحه می‌توانید تصاویر، ویدیوها و توضیحات کامل پروژه‌ها را مشاهده کنید.",
    proj_detail_title: "بازوی رباتیک هوشمند",
    proj_detail_desc: "این پروژه با ترکیب کنترل تطبیقی، بینایی ماشین و شبکه‌های عصبی عمیق توسعه داده شده است.",
    other_projects_title: "سایر پروژه‌ها",
    other_projects_desc: "نمونه‌های بیشتر با توضیحات مختصر",
    proj2_title: "سیستم تشخیص عیب",
    proj2_desc: "یادگیری عمیق برای تشخیص خودکار خطا",
    proj3_title: "بینایی ماشین صنعتی",
    proj3_desc: "تشخیص کیفیت با پردازش تصویر",
    proj4_title: "پلتفرم داده‌محور",
    proj4_desc: "تحلیل داده برای بهینه‌سازی خطوط تولید",
    cta_cv: "دانلود رزومه",
    footer_text: "© 2026 تمام حقوق محفوظ است."
  },
  en: {
    brand_name: "Mechatronics Engineer",
    brand_tag: "Deep Learning Researcher",
    lang_btn: "FA",
    theme_btn: "Dark",
    back_home: "Back",
    projects_page_title: "Project Gallery and Technical Details",
    projects_page_desc: "View images, videos and full project descriptions here.",
    proj_detail_title: "Smart Robotic Arm",
    proj_detail_desc: "Developed using adaptive control, computer vision and deep neural networks.",
    other_projects_title: "Other Projects",
    other_projects_desc: "More samples with short descriptions",
    proj2_title: "Fault Detection System",
    proj2_desc: "Deep learning for automatic fault detection",
    proj3_title: "Industrial Vision",
    proj3_desc: "Quality inspection with image processing",
    proj4_title: "Data‑Driven Platform",
    proj4_desc: "Data analytics for production optimization",
    cta_cv: "Download CV",
    footer_text: "© 2026 All rights reserved."
  }
};

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18n[lang][key] || el.textContent;
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  const icon = theme === "dark" ? "ri-moon-clear-line" : "ri-sun-line";
  themeToggle.querySelector("i").className = icon;
}

window.addEventListener("scroll", () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progress.style.width = `${scrolled}%`;
});

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "fa" ? "en" : "fa";
  applyLang(current);
});

applyLang("fa");
setTheme("dark");
