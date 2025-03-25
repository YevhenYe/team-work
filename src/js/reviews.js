const container = document.querySelector(".reviews-container-scroll");
document.getElementById("scrollLeft").addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("scrollRight").addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});