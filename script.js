const languageSelector = document.getElementById("language");

async function loadTranslations(lang) {
    const response = await fetch("translations.json");
    const translations = await response.json();

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.innerHTML = translations[lang][key]; // Use innerHTML for inline HTML
    });

    localStorage.setItem("language", lang); // Save selection
}
const savedLanguage = localStorage.getItem("language") || "german";
languageSelector.value = savedLanguage;
loadTranslations(savedLanguage);

languageSelector.addEventListener("change", (event) => {
    loadTranslations(event.target.value);
});