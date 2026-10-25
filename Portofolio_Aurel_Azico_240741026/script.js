
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");

  themeToggle.textContent = darkMode
    ? "Mode terang"
    : "Mode gelap";
});
