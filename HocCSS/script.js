var loginBtn = document.getElementById("login-button");
var loginForm = document.querySelector(".login-modal");
var closeBtn = document.querySelector(".close-button");
function handleClick() {
  loginForm.style.display = "flex";
}
function handleClose() {
  loginForm.style.display = "none";
}

loginBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", handleClose);
