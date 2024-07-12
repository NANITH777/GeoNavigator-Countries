const dropDown = document.querySelector(".dropdownMenu");
const dropOptions = document.querySelector(".drop-options");

dropDown.addEventListener("click", (e) => {
  dropOptions.classList.toggle("show-options");
});
