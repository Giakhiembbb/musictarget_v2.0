function register(event) {
  event.preventDefault();
  let username = document.getElementById("signup-email").value.trim();
  let password = document.getElementById("signup-password").value.trim();
  let number_input = document.getElementById("numbers").value.trim();
  let email=document.getElementById("email").value.trim();
  let regMessage = document.getElementById("request");

  let confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;
  if (!lowerCaseLetter.test(password)) {
    regMessage.innerText = "Password must contain a lowercase letter.";
    return;
  }
  if (!upperCaseLetter.test(password)) {
    regMessage.innerText = "Password must contain a uppercase letter.";
    return;
  }
  if (!numbers.test(password)) {
    regMessage.innerText = "Password must contain numbers";
    return;
  }

  if (password !== confirmPassword) {
    regMessage.innerText = "Password not match.";
    return;
  }
  if (number_input.lengh < 8 || !number_input) {
    regMessage.innerText = "Please add phone numbers.";
    return;
  }

  if (password.lengh < 8) {
    regMessage.innerText = "Password must be at least 8 characters.";
    return;
  }

  if (!username || !password || !confirmPassword) {
    regMessage.innerText = "Please fill in all fields";
    return;
  }
  let infor = {
    name: username,
    email: email,
    password: password,
    number: number_input,
  };
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {};

  if (users[email]) {
    regMessage.innerText = "Email already exists!";
  } else {
    users[email] = infor;
    localStorage.setItem("users", JSON.stringify(users));
    regMessage.innerText = "Registration successful!";
  }
}
document.getElementById("signup").addEventListener("click", register);
