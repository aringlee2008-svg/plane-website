const funFacts = [
  "A Boeing 747 has around 6 million parts!",
  "Lightning strikes a commercial plane about once a year on average.",
  "Airplane cabin air is refreshed every 2-3 minutes, making it cleaner than most office air.",
  "The Airbus A380 has a wingspan longer than a football field.",
  "Pilots and co-pilots eat different meals to reduce the risk of both getting food poisoning.",
  "A typical commercial flight uses about 1 gallon of fuel per second.",
  "Airplane windows are round to prevent cracks from spreading — square corners cause stress fractures.",
  "The cruising altitude of most planes is around 35,000 feet — about 7 miles up!",
];

let lastFactIndex = -1;

function showFunFact() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * funFacts.length);
  } while (randomIndex === lastFactIndex);
  lastFactIndex = randomIndex;
  document.getElementById("fun-fact-text").textContent = funFacts[randomIndex];
}

const cabinInfo = {
  economy: {
    title: "Economy Class 💺",
    desc: "Economy is the most affordable way to fly. You'll get a comfortable seat, complimentary snacks and drinks, and access to in-flight entertainment. Perfect for budget-conscious travelers on short to medium flights.",
  },
  business: {
    title: "Business Class 🥂",
    desc: "Business class offers wider, reclining seats that often convert into fully flat beds on long-haul flights. Enjoy gourmet meals, priority boarding, access to exclusive airport lounges, and premium entertainment.",
  },
  first: {
    title: "First Class 👑",
    desc: "First Class is the ultimate flying experience. Expect a private suite with a closing door, a personal butler, fine dining prepared by top chefs, luxury bedding, and amenities you'd find in a 5-star hotel.",
  },
};

function showClass(type) {
  const info = cabinInfo[type];
  document.getElementById("class-title").textContent = info.title;
  document.getElementById("class-desc").textContent = info.desc;
  document.getElementById("class-info").style.display = "block";
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const successMsg = document.getElementById("success-msg");
  successMsg.innerHTML = `✅ Thanks, <strong>${name}</strong>! Your message was sent. We'll get back to you within 24 hours.`;
  successMsg.style.display = "block";
  event.target.reset();
  successMsg.scrollIntoView({ behavior: "smooth" });
}
