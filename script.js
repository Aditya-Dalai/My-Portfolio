let pauseTypewriter = false;
let chillPopupShown = false;


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
  if (pauseTypewriter) {
    setTimeout(typeEffect, 100);
    return;
  }

  const fullText = slogans[i];

  if (isDeleting) {
    j--;
    currentText = fullText.substring(0, j);
  } else {
    j++;
    currentText = fullText.substring(0, j);
  }

  typewriter.textContent = currentText;

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && j === fullText.length) {
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % slogans.length;
  }

  setTimeout(typeEffect, typingSpeed);
}



window.onload = () => {
  document.body.classList.add('blurred');
  setTimeout(() => {
    document.body.classList.remove('blurred');
    typeEffect();
  }, 600);
};



const hackedPopup = document.getElementById("popup-hacked");
const chillPopup = document.getElementById("popup-chill");
const overlay = document.getElementById("popup-overlay");
const popupText = document.getElementById("popup-text");
const countdownEl = document.getElementById("countdown");
const closeBtn = document.getElementById("close-btn");

const isMobile = /Mobi|Android/i.test(navigator.userAgent);
const hackedMessage = isMobile
  ? "Your Device Has Been Hacked<br>All your actions on this device are tracked by a hacker.<br>Immediate Action Is Required!"
  : "Your Computer Has Been Hacked<br>All your actions on the device are tracked by a hacker.<br>Immediate Action Is Required!";

function freezeEverything() {
  document.body.classList.add("blurred");
}

function unfreezeEverything() {
  document.body.classList.remove("blurred");
}

function showPopup() {
  if (sessionStorage.getItem("popupShown")) return;

  sessionStorage.setItem("popupShown", "true");
  pauseTypewriter = true;
  overlay.style.display = "block";
  popupText.innerHTML = hackedMessage;
  hackedPopup.style.display = "block";

  let countdown = 3;
  countdownEl.textContent = countdown;

  let countdownTimer = setInterval(() => {
    countdown--;
    if (countdown === 0) {
      clearInterval(countdownTimer);
      countdownEl.classList.add("hidden");
      closeBtn.classList.remove("hidden");
    } else {
      countdownEl.textContent = countdown;
    }
  }, 1000);


  setTimeout(() => {
    hidePopupAndShowChill();
  }, 5000);

  closeBtn.onclick = () => {
    hidePopupAndShowChill(true);
  };
}

function hidePopupAndShowChill(clicked = false) {
  if (chillPopupShown) return;
  chillPopupShown = true;

  hackedPopup.style.display = "none";
  chillPopup.style.display = "block";

  setTimeout(() => {
    chillPopup.style.display = "none";
    overlay.style.display = "none";
    pauseTypewriter = false;
  }, 3000);
}


setTimeout(showPopup, 7000);
