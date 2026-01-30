const upload = document.getElementById("upload");
const donateBtn = document.getElementById("donate");
const offering = document.getElementById("offering");
const shrine = document.getElementById("shrine");
const flash = document.getElementById("flash");
const messageBox = document.getElementById("message");
const repeatBtn = document.getElementById("repeat");

const messages = [
  "thats some buzz buzz ahh shit do better",
  "basic bee finds that quite cool i guess idk",
  "+1 wind bee egg. fuck yeah.",
  "+1 panda bear quest ( kill 9243 ladybugs )",
  "bobert likes this one fr",
  "go to freebobertnitro.github.io for free bobert shit",
  "bat sipson ahh offer. windy bee is not pleased.",
  "+1 royal jelly. fuck.",
  "what the FUCK IS THAT OFFERING",
  "honey bee is going to fucking kill yo- i mean give you cookies :>"
];

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (!file) return;

  // Reset
  offering.style.animation = "none";
  offering.hidden = false;
  donateBtn.hidden = true;
  messageBox.hidden = true;
  repeatBtn.hidden = true;
  shrine.hidden = false;

  // Load preview
  offering.src = URL.createObjectURL(file);

  offering.onload = () => {
    donateBtn.hidden = false;
  };
});

donateBtn.addEventListener("click", () => {
  upload.hidden = true;
  donateBtn.hidden = true;
  startAnimation();
});

function startAnimation() {
  const shrineRect = shrine.getBoundingClientRect();
  const offeringRect = offering.getBoundingClientRect();

  const dx =
    shrineRect.left + shrineRect.width / 2 -
    (offeringRect.left + offeringRect.width / 2);

  const dy =
    shrineRect.top + shrineRect.height / 2 -
    (offeringRect.top + offeringRect.height / 2);

  offering.style.setProperty("--x", `${dx}px`);
  offering.style.setProperty("--y", `${dy}px`);

  // Force reflow
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
  donateBtn.hidden = true;
  offering.hidden = true;
  offering.style.animation = "none";
  messageBox.hidden = true;
  repeatBtn.hidden = true;
  shrine.hidden = false;
});

