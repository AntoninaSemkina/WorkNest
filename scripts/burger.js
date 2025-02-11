const burgerButton = document.getElementById("burger-button");
const burgerOpen = document.getElementById("burger-open");
const burgerClose = document.getElementById("burger-close");
const burgerNav = document.querySelector(".burger-nav");
const desktopNav = document.querySelector(".desktop-nav");
const menuLinks = document.querySelectorAll(".burger-nav a");

function toggleMenu() {
  const isVisible = burgerNav.classList.contains("active");

  if (isVisible) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  burgerNav.classList.add("active");
  burgerNav.style.display = "block";
  burgerOpen.style.display = "none";
  burgerClose.style.display = "block";
}

function closeMenu() {
  burgerNav.classList.remove("active");
  burgerNav.style.display = "none";
  burgerOpen.style.display = "block";
  burgerClose.style.display = "none";
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function handleResize() {
  if (window.innerWidth > 1000) {
    burgerNav.style.display = "none";
    burgerNav.classList.remove("active");
    desktopNav.style.display = "block";
    burgerOpen.style.display = "none";
    burgerClose.style.display = "none";
  } else {
    burgerNav.style.display = "none";
    desktopNav.style.display = "none";
    burgerOpen.style.display = "block";
    burgerClose.style.display = "none";
  }
}

burgerButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);

handleResize();
