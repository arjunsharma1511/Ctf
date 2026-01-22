if (!localStorage.role) {
  localStorage.role = "user";
}

document.getElementById("challenge").innerText =
  "Role: " + localStorage.role;

window.level13Check = () => localStorage.role === "admin";
