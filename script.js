function checkPassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const message = document.getElementById("result-message");

  if (password.value.length !== 0 || confirmPassword.value.length !== 0) {
      if (password.value === confirmPassword.value) {
          message.textContent = "* Password match"
          message.style.color = "green"
      }   else {
          message.textContent = "* Password do not match"
          message.style.color = "red"
      }
  }   else {
      alert("Please enter your password");
      message.textContent = "";
  }
}