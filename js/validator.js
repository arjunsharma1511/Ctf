function validate(input, level) {
  if (window[`level${level}Check`](input)) {
    const flag = generateFlag(input, level);
    document.getElementById("result").innerText =
      `✅ Correct!\nFLAG: ${flag}`;

    document.getElementById("nextBtn").style.display = "inline-block";
    currentLevel++;
  } else {
    document.getElementById("result").innerText = "❌ Incorrect";
  }
}
