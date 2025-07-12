let pauseTypewriter = false;

const slogans = ["Tech-Paglu", "Rookie Engineer", "Wannabe Developer"];
let i = 0, j = 0, isDeleting = false, currentText = "";
const typewriter = document.getElementById("slogan");

function typeEffect() {
  if (pauseTypewriter) return setTimeout(typeEffect, 100);

  const fullText = slogans[i];
  currentText = isDeleting ? fullText.substring(0, --j) : fullText.substring(0, ++j);
  typewriter.textContent = currentText;

  const speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === fullText.length) return setTimeout(() => { isDeleting = true; typeEffect(); }, 1200);
  if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % slogans.length; }

  setTimeout(typeEffect, speed);
}

window.onload = () => {
  document.body.classList.add('blurred');
  setTimeout(() => {
    document.body.classList.remove('blurred');
    typeEffect();
  }, 600);
};
