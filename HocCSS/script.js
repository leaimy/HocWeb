const loginBtn = document.getElementById("login-button");
const loginFormContainer = document.querySelector(".login-modal");
const closeBtn = document.querySelector(".close-button");
const loginForm = document.querySelector(".form");
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
