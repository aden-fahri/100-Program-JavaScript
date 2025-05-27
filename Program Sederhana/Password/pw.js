const btnPassword = document.getElementById("btn-password");
const passwordInput = document.getElementById("password");

btnPassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    btnPassword.textContent = "Hide Password";
    btnPassword.classList.remove("show-password");
    btnPassword.classList.add("hide-password");
  } else {
    passwordInput.type = "password";
    btnPassword.textContent = "Show Password";
    btnPassword.classList.remove("hide-password");
    btnPassword.classList.add("show-password");
  }
});