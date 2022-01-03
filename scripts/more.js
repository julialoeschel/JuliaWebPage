const moreArrow = document.querySelector("[data-js=more-link]");
const cvPage = document.querySelector("[data-js=cv-Page]");

export function toggleMore() {
  moreArrow.addEventListener("click", () => {
    cvPage.classList.toggle("hidden");
    window.scrollBy({ top: 400, left: 0, behavior: "smooth" });
  });
}
