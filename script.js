const navSignupButton = document.getElementById("sign-up");
const navAccButton = document.getElementById("nav-account-name");
const navAccDropdown = document.getElementById("nav-account-Dropdown");
const textSection = document.getElementById("text");
const closeButton = document.getElementById("cancel-btn");
const hamburgerbtn = document.getElementById("nav-hamburger-sect");
const navigationBtn = document.getElementById("navigational-btn-sect");
const cookiesText = document.getElementById("cookie-sect");
const acceptBtn = document.getElementById("acceptBtn");

closeButton.addEventListener("click", () => {
  textSection.style.display = "none";
});
setTimeout(() => {
  console.log("first");
  textSection.style.display = "flex";
}, 30000);

acceptBtn.addEventListener("click", () => {
  cookiesText.style.display = "none";
});

setTimeout(() => {
  cookiesText.style.display = "block";
}, 5000);

navAccButton.addEventListener("click", () => {
  if (navAccDropdown.style.display === "block") {
    return (navAccDropdown.style.display = "none");
  } else {
    navAccDropdown.style.display = "block";
  }
  console.log("dropdown toggled");
});

navSignupButton.onclick = () => {
  //   window.location.pathname = "/signup.html";
  window.location.replace("/signup.html");
};

hamburgerbtn.addEventListener("click", () => {
  navigationBtn.style.display = "block";
});
