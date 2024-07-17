const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".bx");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bx-sun");

  icon.textContent = document.body.classList.contains("dark-mode")
    ? "Light mode"
    : "Dark mode";
});

document.addEventListener("DOMContentLoaded", () => {
  const selectedCountry = JSON.parse(localStorage.getItem("selectedCountry"));

  if (selectedCountry) {
    document.getElementById("country-name").innerText = selectedCountry.name;
    document.getElementById("country-flag").src = selectedCountry.flag;
    document.getElementById("country-population").innerText =
      selectedCountry.population;
    document.getElementById("country-area").innerText = selectedCountry.area;
    document.getElementById("country-region").innerText =
      selectedCountry.region;
    document.getElementById("country-subregion").innerText =
      selectedCountry.subregion;
    document.getElementById("country-capital").innerText =
      selectedCountry.capital;

    // Check if languages exist
    const languages =
      selectedCountry.languages && selectedCountry.languages.length > 0
        ? selectedCountry.languages
            .map((lang) => `<li>${lang.name}</li>`)
            .join("")
        : "No languages available";

    document.getElementById("country-languages").innerHTML = languages;

    // Check if currencies exist
    const currencies = selectedCountry.currencies
      ? selectedCountry.currencies.map((curr) => curr.name).join(", ")
      : "No currencies available";
    document.getElementById("country-currencies").innerText = currencies;
  }
});
