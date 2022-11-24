/*window.addEventListener("scroll", () => {
  addStickClasses();
});

function addStickClasses() {
  let nav = document.getElementById("main-nav");
  let reference = document.getElementById("reference");
  if (window.scrollY > reference.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

document.getElementById("mobile-nav").addEventListener("click", expandNav);

function expandNav() {
  let nvaElements = document.getElementsByClassName("mobile-nav-option");
  let position = 0;
  let zIndex = -1;
  for (let element of nvaElements) {
    element.style.bottom = `${position}rem`;
    position += 4.5;
  }
}

