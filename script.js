const slogans = [
  "Tech-Paglu",
  "Rookie Engineer",
  "Wannabe Developer"
];

let i = 0;
let j = 0;
let isDeleting = false;
let currentText = "";
const typewriter = document.getElementById("slogan");

function typeEffect() {
  const fullText = slogans[i];

  if (isDeleting) {
    j--;
    currentText = fullText.substring(0, j);
  } else {
    j++;
    currentText = fullText.substring(0, j);
  }

  typewriter.textContent = currentText;

  // Speed settings
  let typingSpeed = isDeleting ? 50 : 100;

  // Pause at end of full text
  if (!isDeleting && j === fullText.length) {
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, 1200); // 👈 Hold full text for ~1.2 seconds
    return;
  }

  // Move to next word
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % slogans.length;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Trigger on load
window.onload = () => {
  document.body.classList.add('blurred');
  setTimeout(() => {
    document.body.classList.remove('blurred');
    typeEffect();
  }, 600);
};
