const moreToArrow = document.querySelector("[data-js=pagelink]");
const section3 = document.querySelector("[data-js=contact]");

export function scrollHobbies() {
  moreToArrow.addEventListener("click", () => {
    console.log("hi");
    section3.classList.toggle("hidden");
    window.scrollBy({ top: 400, left: 0, behavior: "smooth" });
  });
}
