const moreArrow = document.querySelector("[data-js=page-link]");
const section2 = document.querySelector("[data-js=pageTwo]");

export function scrollMore() {
  moreArrow.addEventListener("click", () => {
    section2.classList.toggle("hidden");
    window.scrollBy({ top: 400, left: 0, behavior: "smooth" });
  });
}
