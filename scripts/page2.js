const moreArrow = document.querySelector("[data-js=page-link]");

export function scrollMore() {
  moreArrow.addEventListener("click", () => {
    console.log("hi");
    window.scrollBy({ top: 400, left: 0, behavior: "smooth" });
  });
}
