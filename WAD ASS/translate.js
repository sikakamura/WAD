import translations from "./data/translation.js";

const toggle = document.getElementById("languageToggle");
const toggleLabel = document.getElementById("toggleLabel");

const paragraphs = [
  document.getElementById("first-para"),
  document.getElementById("second-para"),
  document.getElementById("third-para"),
  document.getElementById("fouth-para"),
  document.getElementById("fifth-para"),
  document.getElementById("sixth-para"),
  document.getElementById("seventh-para"),
  document.getElementById("eight-para"),
  document.getElementById("nine-para"),
];

// Event listener for language toggle
toggle.addEventListener("change", (event) => {
  const lang = event.target.checked ? "km" : "en";
  toggleLabel.textContent = lang === "km" ? "Khmer" : "English";

  // Update text for all paragraphs
  paragraphs.forEach((para, index) => {
    console.log(index);
    if (translations[lang][index]) {
      para.innerHTML = translations[lang][index];
    }
  });
});

// Set default language
paragraphs.forEach((para, index) => {
  para.innerHTML = translations["en"][index];
});

console.log("English translations:", translations["en"].length);
console.log("Khmer translations:", translations["km"].length);
