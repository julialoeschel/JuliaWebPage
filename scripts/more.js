const moreArrow = document.querySelector("[data-js=more-link]");

export function toggleMore() {
  moreArrow.addEventListener("click", () => {
    console.log("hi");
    moreArrow.classList.toggle("bg-red-600");
  });
}
