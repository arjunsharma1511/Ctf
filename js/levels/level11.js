let isAdmin = false;

document.getElementById("challenge").innerText =
  "Admins only. Access denied.";

window.level11Check = () => isAdmin === true;
