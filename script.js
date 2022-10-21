window.addEventListener("scroll", () => {
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

/*
  #003056 0%,
  #98d2ec 29%,
  #f1c40f 67%,
  #e26a6a 100%
  */
