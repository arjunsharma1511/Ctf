function verify() {
  return false;
}

document.getElementById("challenge").innerText =
  "Verification failed.";

window.level12Check = () => verify() === true;
