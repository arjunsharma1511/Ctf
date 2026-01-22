function validate(input, level) {
  if (window[`level${level}Check`](input)) {
    const flag = generateFlag(input, level);
    document.getElementById("result").innerText =
      `✅ Correct!\nFLAG: ${flag}`;
    currentLevel++;
    setTimeout(loadLevel, 1500);
  } else {
    document.getElementById("result").innerText = "❌ Incorrect";
  }
}
