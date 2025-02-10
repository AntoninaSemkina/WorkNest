document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращает стандартную отправку формы

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Если все поля заполнены, перенаправляем на страницу "спасибо"
    window.location.href = "thanks.html";
  });
});
