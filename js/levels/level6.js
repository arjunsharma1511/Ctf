const secret = "javascript";

document.getElementById("challenge").innerText =
  "Variables know the answer.";

window.level6Check = (input) => input === secret;
