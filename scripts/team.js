const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

window.addEventListener("DOMContentLoaded", () => {
  modal.style.display = "none";
});

document.querySelectorAll(".teacher").forEach((teacher) => {
  teacher.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const history = this.getAttribute("data-history");
    const image = this.getAttribute("data-image");

    modalTitle.textContent = name;
    modalText.textContent = history;
    modalImage.src = image;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
