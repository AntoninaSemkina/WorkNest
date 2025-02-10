const classTimes = {
  "Hatha Yoga": ["08:00 AM", "10:00 AM", "02:00 PM"],
  "Vinyasa Yoga": ["09:00 AM", "11:00 AM", "03:00 PM"],
  "Ashtanga Yoga": ["07:00 AM", "12:00 PM", "04:00 PM"],
  "Kundalini Yoga": ["06:00 AM", "08:00 AM", "05:00 PM"],
  "Pregnant Yoga": ["01:00 PM", "05:00 PM", "07:00 PM"],
  "Meditation Yoga": ["06:00 AM", "03:00 PM", "10:00 PM"],
};

document.getElementById("class").addEventListener("change", function () {
  const selectedClass = this.value;
  const timeSelect = document.getElementById("time");

  timeSelect.innerHTML = '<option value="">--Choose a Time--</option>';

  if (classTimes[selectedClass]) {
    classTimes[selectedClass].forEach((time) => {
      const option = document.createElement("option");
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
    });
  }
});

document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectedClass = document.getElementById("class").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !selectedClass || !date || !time) {
      alert("Please fill in all fields before booking!");
      return;
    }

    localStorage.setItem("bookingName", name);
    localStorage.setItem("bookingClass", selectedClass);
    localStorage.setItem("bookingDate", date);
    localStorage.setItem("bookingTime", time);
    localStorage.setItem("bookingEmail", email);
  });
