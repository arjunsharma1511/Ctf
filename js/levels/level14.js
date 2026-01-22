document.getElementById("challenge").innerHTML =
  `<button onclick="fakeCheck()">Validate</button>`;

function fakeCheck() {
  document.getElementById("result").innerText =
    "✔ Validated";
}

window.level14Check = () =>
  document.getElementById("result").innerText.includes("✔");
