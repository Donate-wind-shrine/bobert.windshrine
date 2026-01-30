const upload = document.getElementById("upload");
const offering = document.getElementById("offering");
const shrine = document.getElementById("shrine");
const flash = document.getElementById("flash");
const messageBox = document.getElementById("message");
const repeatBtn = document.getElementById("repeat");

const messages = [
  "The wind accepts your offering.",
  "The shrine hums with power.",
  "A gentle breeze answers.",
  "The winds are pleased.",
  "Your offering vanishes into the sky.",
  "The shrine resonates.",
  "The air shifts quietly.",
  "A blessing is carried away.",
  "The wind whispers softly.",
  "The shrine acknowledges you."
];

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (!file) return;

  // Reset state
  offering.style.animation = "none";
  offering.hidden = false;
  shrine.hidden = false;
  messageBox.hidden = true;
  repeatBtn.hidden = true;

  // Load image
  offering.src = URL.createObjectURL(file);

  // Wait for image to fully load
  offering.onload = () => {
    upload.hidden = true;
    startAnimation();
  };
});

function startAnimation() {
  const shrineRect = shrine.getBoundingClientRect();
  const offeringRect = offering.getBoundingClientRect();

  const shrineCenterX = shrineRect.left + shrineRect.width / 2;
  const shrineCenterY = shrineRect.top + shrineRect.height / 2;

  const offeringCenterX = offeringRect.left + offeringRect.width / 2;
  const offeringCenterY = offeringRect.top + offeringRect.height / 2;

  const dx = shrineCenterX - offeringCenterX;
  const dy = shrineCenterY - offeringCenterY;

  offering.style.setProperty("--x", `${dx}px`);
  offering.style.setProperty("--y", `${dy}px`);

  // Force reflow so animation restarts reliably
  offering.offsetWidth;

  offering.style.animation = "offerToShrine 2s ease-in forwards";

  setTimeout(flashScreen, 2000);
}

function flashScreen() {
  shrine.hidden = true;
  flash.style.opacity = "1";

  setTimeout(() => {
    flash.style.opacity = "0";
    showMessage();
  }, 200);
}

function showMessage() {
  offering.hidden = true;
  messageBox.textContent =
    messages[Math.floor(Math.random() * messages.length)];
  messageBox.hidden = false;
  repeatBtn.hidden = false;
}

repeatBtn.addEventListener("click", () => {
  upload.value = "";
  upload.hidden = false;
  shrine.hidden = false;
  offering.hidden = true;
  offering.style.animation = "none";
  messageBox.hidden = true;
  repeatBtn.hidden = true;
});
