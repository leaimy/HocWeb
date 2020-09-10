var loginBtn = document.getElementById("login-button");
var loginFormContainer = document.querySelector(".login-modal");
var closeBtn = document.querySelector(".close-button");
var loginForm = document.querySelector(".form");
function handleClick() {
  loginFormContainer.style.display = "flex";
}
function handleClose() {
  loginFormContainer.style.display = "none";
}

loginBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", handleClose);
loginFormContainer.addEventListener("click", handleClose);
loginForm.addEventListener("click", function (e) {
  e.stopPropagation();
});
