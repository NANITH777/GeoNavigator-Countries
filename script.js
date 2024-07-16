const dropDown = document.querySelector(".dropdownMenu");
const dropOptions = document.querySelector(".drop-options");
const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".bx");
const countries = document.querySelector(".countries");
const search = document.querySelector(".search");
const regions = document.querySelectorAll(".regions");

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bxs-moon");
  dropDown.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "Light mode";
  } else {
    icon.textContent = "Dark mode";
  }
});

dropDown.addEventListener("click", (e) => {
  dropOptions.classList.toggle("show-options");
});

async function getCountries() {
  const URL = await fetch("https://restcountries.com/v2/all");
  const res = await URL.json();
  console.log(res);
  res.forEach((api) => {
    showCountry(api);
  });

  document.getElementById("loading").style.display = "none";
  document.querySelector("footer").classList.remove("hidden");
}

getCountries();

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");

  const language = data.languages ? data.languages[0] : "No language";
  const currency = data.currencies
    ? data.currencies[Object.keys(data.currencies)[0]]?.name
    : "No currency";
  country.innerHTML = `<div class="country-img">
          <img
            src=${data.flag}
            alt=""
          />
        </div>
        <div class="country-details">
          <h5 class="countryName">${data.name}</h5>
          <p><strong>Population 👫:</strong>${data.population}</p>
          <p class="regionName"><strong>Region 🌇:</strong>${data.region}</p>
          <p><strong>Capital 🏙️:</strong>${data.capital}</p>
          <p><strong>Languages 🗣️:</strong>${language.name}</p>
          <p><strong>Currencies 💰:</strong>${currency}</p>
        </div>`;

  countries.appendChild(country);

  setTimeout(() => {
    country.classList.add("show");
  }, 10);
}

const countryName = document.getElementsByClassName("countryName");

search.addEventListener("input", (e) => {
  Array.from(countryName).forEach((country) => {
    if (country.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      country.parentElement.parentElement.style.display = "block";
      country.classList.add("show");
    } else {
      country.parentElement.parentElement.style.display = "none";
      country.classList.remove("show");
    }
  });
});

const regionName = document.getElementsByClassName("regionName");
regions.forEach((region) => {
  region.addEventListener("click", (e) => {
    Array.from(regionName).forEach((reg) => {
      if (
        reg.innerText.includes(region.innerText) ||
        region.innerText === "All"
      ) {
        reg.parentElement.parentElement.style.display = "grid";
      } else {
        reg.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
