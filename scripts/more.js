const moreArrow = document.querySelector("[data-js=more-link]");

export function toggleMore() {
  moreArrow.addEventListener("click", () => {
    moreArrow.classList.toggle("bg-red-800");
  });
}
