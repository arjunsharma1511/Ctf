function mystery(x) {
  return x * 2 + 2;
}

document.getElementById("challenge").innerText =
  "What input gives output 10?";

window.level8Check = (input) => mystery(Number(input)) === 10;
