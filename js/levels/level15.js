let unlocked = false;

function unlock() {
  unlocked = true;
}

document.getElementById("challenge").innerText =
  "System locked.";

window.level15Check = () => unlocked === true;
