const reviews = [
  {
    name: "Vivek Iyer",
    rating: "5/5",
    text: "Vivek’s approach to yoga is truly inspiring! His combination of traditional yoga with modern breathing techniques has helped me feel more balanced and energized. His classes are both challenging and deeply relaxing. Highly recommended!",
    reviewer: "— Sophia L.",
  },
  {
    name: "Vivek Iyer",
    rating: "5/5",
    text: "I love how Vivek explains the importance of breathwork alongside movement. His teachings have helped me significantly improve my flexibility and focus. After every session, I feel refreshed and deeply connected to my inner self.",
    reviewer: "— Daniel K.",
  },
  {
    name: "Ananya Sharma",
    rating: "5/5",
    text: "Ananya's Kundalini Yoga classes are transformational! Her calming presence and guidance through meditation have helped me overcome stress and anxiety. I feel a deep sense of peace and clarity after every session.",
    reviewer: "— Emma R.",
  },
  {
    name: "Ananya Sharma",
    rating: "5/5",
    text: "Practicing with Ananya has been a life-changing experience. Her energy and dedication make every class magical. I’ve never felt so spiritually connected and balanced. Thank you, Ananya!",
    reviewer: "— Michael S.",
  },
  {
    name: "Meera Kapoor",
    rating: "5/5",
    text: "Meera’s Vinyasa Flow classes are simply amazing! The way she connects breath with movement is mesmerizing. Every session feels like a dance, leaving me energized and uplifted. Can’t wait for the next one!",
    reviewer: "— Jessica P.",
  },
  {
    name: "Meera Kapoor",
    rating: "5/5",
    text: "Meera is an exceptional teacher! Her sequences are creative yet accessible for all levels. She has an incredible way of making each student feel special. I’ve seen great improvement in my strength and flexibility!",
    reviewer: "— Robert T.",
  },
  {
    name: "Priya Chaturvedi",
    rating: "5/5",
    text: "Priya’s prenatal yoga classes were exactly what I needed during my pregnancy. She created a nurturing space where I felt safe and supported. Her breathing exercises helped me tremendously during labor. Highly recommend for all expecting moms!",
    reviewer: "— Emily W.",
  },
  {
    name: "Priya Chaturvedi",
    rating: "5/5",
    text: "As a first-time mom, I was looking for a yoga class that would help me stay active while preparing for childbirth. Priya’s classes provided not only physical benefits but also emotional support. She is a wonderful and compassionate teacher!",
    reviewer: "— Lauren B.",
  },
  {
    name: "Rohan Bhattacharya",
    rating: "5/5",
    text: "Rohan’s Hatha Yoga classes have changed my perspective on yoga. His deep understanding of traditional yoga philosophy combined with practical asanas makes every class a unique experience. I feel stronger, both physically and mentally!",
    reviewer: "— James C.",
  },
  {
    name: "Rohan Bhattacharya",
    rating: "5/5",
    text: "I appreciate how Rohan takes the time to ensure that each student is comfortable and progressing at their own pace. His calm and patient teaching style makes yoga accessible and enjoyable. I always leave his class feeling at peace.",
    reviewer: "— Isabelle M.",
  },
  {
    name: "Arjun Deshmukh",
    rating: "5/5",
    text: "Arjun’s Ashtanga Yoga classes are intense but incredibly rewarding! His attention to detail and adjustments have helped me improve my practice tremendously. His passion for yoga is contagious!",
    reviewer: "— Matthew G.",
  },
  {
    name: "Arjun Deshmukh",
    rating: "5/5",
    text: "If you’re looking for a challenge, Arjun is the best instructor out there! His structured approach and dedication to the practice push me to new limits every session. I’ve gained so much strength and discipline thanks to him!",
    reviewer: "— Natalie D.",
  },
];

function renderReviews() {
  const reviewContainer = document.querySelector(".section_review_block2");
  reviewContainer.innerHTML = "";

  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("section_review_item");

    reviewElement.innerHTML = `
        <h2>${review.name}</h2>
        <h3>${review.rating}</h3>
        <p>${review.text}</p>
        <h4>${review.reviewer}</h4>
      `;

    reviewContainer.appendChild(reviewElement);
  });
}

renderReviews();
