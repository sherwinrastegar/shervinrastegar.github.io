const DATA_KEY = "portfolioData";

async function loadDefault() {
  const res = await fetch("assets/data/content.json");
  return await res.json();
}

function downloadJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "content.json";
  a.click();
}

function getField(id) {
  return document.getElementById(id).value.trim();
}

function setField(id, val) {
  document.getElementById(id).value = val ?? "";
}

function parseJSON(id) {
  return JSON.parse(document.getElementById(id).value);
}

(async function init() {
  const data = localStorage.getItem(DATA_KEY)
    ? JSON.parse(localStorage.getItem(DATA_KEY))
    : await loadDefault();

  setField("nameFa", data.site.name.fa);
  setField("nameEn", data.site.name.en);
  setField("roleFa", data.site.role.fa);
  setField("roleEn", data.site.role.en);
  setField("eyebrowFa", data.site.eyebrow.fa);
  setField("eyebrowEn", data.site.eyebrow.en);
  setField("aboutFa", data.about.fa);
  setField("aboutEn", data.about.en);

  setField("projectsJson", JSON.stringify(data.projects, null, 2));
  setField("articlesJson", JSON.stringify(data.articles, null, 2));
  setField("skillsJson", JSON.stringify(data.skills, null, 2));
  setField("timelineProfJson", JSON.stringify(data.timelineProfessional, null, 2));
  setField("timelineEduJson", JSON.stringify(data.timelineEducation, null, 2));
  setField("languagesJson", JSON.stringify(data.languages, null, 2));

  setField("ieltsReading", data.ielts.Reading);
  setField("ieltsWriting", data.ielts.Writing);
  setField("ieltsListening", data.ielts.Listening);
  setField("ieltsSpeaking", data.ielts.Speaking);

  document.getElementById("saveBtn").onclick = () => {
    const updated = { ...data };

    updated.site.name.fa = getField("nameFa");
    updated.site.name.en = getField("nameEn");
    updated.site.role.fa = getField("roleFa");
    updated.site.role.en = getField("roleEn");
    updated.site.eyebrow.fa = getField("eyebrowFa");
    updated.site.eyebrow.en = getField("eyebrowEn");
    updated.about.fa = getField("aboutFa");
    updated.about.en = getField("aboutEn");

    updated.projects = parseJSON("projectsJson");
    updated.articles = parseJSON("articlesJson");
    updated.skills = parseJSON("skillsJson");
    updated.timelineProfessional = parseJSON("timelineProfJson");
    updated.timelineEducation = parseJSON("timelineEduJson");
    updated.languages = parseJSON("languagesJson");

    updated.ielts = {
      Reading: parseFloat(getField("ieltsReading")),
      Writing: parseFloat(getField("ieltsWriting")),
      Listening: parseFloat(getField("ieltsListening")),
      Speaking: parseFloat(getField("ieltsSpeaking"))
    };

    localStorage.setItem(DATA_KEY, JSON.stringify(updated));
    alert("اطلاعات ذخیره شد ✅");
  };

  document.getElementById("downloadBtn").onclick = () => {
    const current = localStorage.getItem(DATA_KEY)
      ? JSON.parse(localStorage.getItem(DATA_KEY))
      : data;
    downloadJSON(current);
  };

  document.getElementById("resetBtn").onclick = async () => {
    localStorage.removeItem(DATA_KEY);
    location.reload();
  };
})();

