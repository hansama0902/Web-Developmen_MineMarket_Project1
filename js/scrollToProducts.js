export function scrollToProducts() {
  window.location.href = "#products";
}
document
  .getElementById("hero-section")
  .addEventListener("click", scrollToProducts);
