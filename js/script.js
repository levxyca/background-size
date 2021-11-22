const img = document.querySelector(".main__image");

const cover = document.getElementById("cover");
const contain = document.getElementById("contain");
const width = document.getElementById("width");
const width_height = document.getElementById("width-height");
const varios = document.getElementById("varios");
const inherit = document.getElementById("inherit");
const initial = document.getElementById("initial");
const unset = document.getElementById("unset");

cover.addEventListener("click", () => {
  img.classList.add("style__background-cover");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-varios");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-unset");
});

contain.addEventListener("click", () => {
  img.classList.add("style__background-contain");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-varios");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-unset");
});

width.addEventListener("click", () => {
  img.classList.add("style__background-width");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-varios");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-unset");
});

width_height.addEventListener("click", () => {
  img.classList.add("style__background-width-height");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-varios");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-unset");
});

varios.addEventListener("click", () => {
  img.classList.add("style__background-varios");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-unset");
});

inherit.addEventListener("click", () => {
  img.classList.add("style__background-inherit");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-varios");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-unset");
});

initial.addEventListener("click", () => {
  img.classList.add("style__background-initial");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-unset");
});

unset.addEventListener("click", () => {
  img.classList.add("style__background-unset");
  img.classList.remove("style__background-contain");
  img.classList.remove("style__background-cover");
  img.classList.remove("style__background-width-height");
  img.classList.remove("style__background-width");
  img.classList.remove("style__background-inherit");
  img.classList.remove("style__background-initial");
  img.classList.remove("style__background-varios");
});
