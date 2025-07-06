// Loading page fade-out
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
