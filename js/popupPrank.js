let chillPopupShown = false;
const hackedPopup = document.getElementById("popup-hacked");
const chillPopup = document.getElementById("popup-chill");
const overlay = document.getElementById("popup-overlay");
const popupText = document.getElementById("popup-text");
const countdownEl = document.getElementById("countdown");
const closeBtn = document.getElementById("close-btn");

const isMobile = window.innerWidth <= 768;
const hackedMessage = isMobile
  ? "Your Device Has Been Hacked<br><br>Immediate Action Is Required!"
  : "Your Computer Has Been Hacked<br><br>Immediate Action Is Required!";

function showPopup() {
  if (sessionStorage.getItem("popupShown")) return;
  sessionStorage.setItem("popupShown", "true");

  pauseTypewriter = true;
  overlay.style.display = "block";
  popupText.innerHTML = hackedMessage;
  hackedPopup.style.display = "block";

  let countdown = 3;
  countdownEl.textContent = countdown;

  const countdownTimer = setInterval(() => {
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

    if (isMobile) {
      const gifWrapper = document.getElementById("mobile-gif");
      const gif = document.getElementById("troll-img");
      gif.src = "assets/troll.gif";
      gifWrapper.style.display = "flex";
    }
  }, 3000);
}

setTimeout(showPopup, 7000);
