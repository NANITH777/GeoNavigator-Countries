const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".bx");

document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.classList.add("dark-mode");
    icon.classList.add("bx-sun");
    icon.textContent = "Light mode";
  } else {
    document.body.classList.remove("dark-mode");
    toggle.classList.remove("dark-mode");
    icon.classList.remove("bx-sun");
    icon.textContent = "Dark mode";
  }
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bx-sun");

  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "Light mode";
    localStorage.setItem("darkMode", "enabled");
  } else {
    icon.textContent = "Dark mode";
    localStorage.setItem("darkMode", "disabled");
  }
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

    // Fetch neighboring countries
    const neighboringCountriesContainer = document.getElementById(
      "neighboring-countries"
    );

    if (selectedCountry.borders && selectedCountry.borders.length > 0) {
      selectedCountry.borders.forEach((border) => {
        fetch(`https://restcountries.com/v2/alpha/${border}`)
          .then((response) => response.json())
          .then((neighbor) => {
            const neighborDiv = document.createElement("div");
            neighborDiv.classList.add("neighbor-country");
            neighborDiv.innerText = neighbor.name;
            neighborDiv.addEventListener("click", () => {
              localStorage.setItem("selectedCountry", JSON.stringify(neighbor));
              window.location.href = "country.html";
            });
            neighboringCountriesContainer.appendChild(neighborDiv);
          });
      });
    } else {
      const noNeighborsMessage = document.createElement("div");
      noNeighborsMessage.classList.add("no-neighbors-message");
      noNeighborsMessage.innerText =
        "This country has no neighboring countries.";
      neighboringCountriesContainer.appendChild(noNeighborsMessage);
    }
  }
});
