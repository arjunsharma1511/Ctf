let currentLevel = 1;

function loadLevel() {
  document.getElementById("result").innerText = "";
  const script = document.createElement("script");
  script.src = `js/levels/level${currentLevel}.js`;
  document.body.appendChild(script);
}

function submitAnswer() {
  const input = document.getElementById("userInput").value;
  validate(input, currentLevel);
}

loadLevel();
