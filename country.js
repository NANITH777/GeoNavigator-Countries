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
