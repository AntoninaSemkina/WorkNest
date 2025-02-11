document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    window.location.href = "thanks.html";
  });
});

const memberships = [
  {
    title: "Private Sessions",
    description: "One-on-one training with an instructor",
    details: [
      "Personalized approach to practice",
      "Correction of posture and technique",
      "Tailored program based on individual goals",
    ],
    price: "$50 per session",
    image: "image/abonement/abonement1.jpeg",
  },
  {
    title: "Single Class Pass",
    description: "Attend any group session",
    details: [
      "Flexibility to choose any class",
      "Opportunity to try different styles",
      "No membership commitment",
    ],
    price: "$20 per class",
    image: "image/abonement/abonement2.jpeg",
  },
  {
    title: "8-Class Pass",
    description: "Monthly subscription",
    details: [
      "Valid for 30 days",
      "8 classes of your choice",
      "Save $40 compared to single classes",
    ],
    price: "$120",
    image: "image/abonement/abonement3.jpeg",
  },
  {
    title: "12-Class Pass",
    description: "For those who practice regularly",
    details: [
      "Valid for 30 days",
      "12 classes of your choice",
      "Save $80 compared to single classes",
    ],
    price: "$160",
    image: "image/abonement/abonement4.jpeg",
  },
  {
    title: "Online Private Class",
    description: "Practice from home via Zoom",
    details: [
      "Live virtual sessions",
      "Access to recordings",
      "Real-time interaction with instructors",
    ],
    price: "Starting from $30",
    image: "image/abonement/abonement5.jpeg",
  },
  {
    title: "Online Group Class",
    description: "Practice from home via Zoom",
    details: [
      "Live virtual sessions",
      "Access to recordings",
      "Real-time interaction with instructors",
    ],
    price: "Starting from $15",
    image: "image/abonement/abonement6.jpeg",
  },
];

function loadMemberships() {
  const container = document.querySelector(".section6_block2");
  container.innerHTML = "";

  memberships.forEach((membership) => {
    const div = document.createElement("div");
    div.classList.add("membership-card");

    div.style.backgroundImage = `url(${membership.image})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.color = "white";

    let detailsHTML = "";
    if (membership.details) {
      detailsHTML =
        "<ul>" +
        membership.details.map((item) => `<li>${item}</li>`).join("") +
        "</ul>";
    }

    div.innerHTML = `
      <div class="membership-content">
        <h4>${membership.title}</h4>
        <p>${membership.description}</p>
        ${detailsHTML}
        <p><strong>${membership.price}</strong></p>
      </div>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadMemberships);
