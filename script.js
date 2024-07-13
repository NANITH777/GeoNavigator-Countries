const dropDown = document.querySelector(".dropdownMenu");
const dropOptions = document.querySelector(".drop-options");
const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".bx");
const country = document.querySelector(".country");

async function getCountries() {
  const URL = await fetch("https://restcountries.com/v2/all");
  const res = wait URL.json();
  console.log(res);
}

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bxs-moon");
  dropDown.classList.toggle("dark-mode");
});

dropDown.addEventListener("click", (e) => {
  dropOptions.classList.toggle("show-options");
});
