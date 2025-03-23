function login(event) {
  event.preventDefault;
  let username=document.getElementById("signup_name").value.trim()
  let email=document.getElementById("email_signin").value.trim()
  let password=document.getElementById("signup-password").value.trim()
  let confirmPassword=document.getElementById("confirm-password").value.trim()
  let loginMessage=document.getElementById("loginMessage");

console.log(username)



  let users = localStorage.getItem("users") ? JSON.parse
  (localStorage.getItem("users")) :{};
  let storedUser=users[email];
  console.log(storedUser);
  if(storedUser && storedUser.password === password){
    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
    window.location.href="index.html";
  } else{
    loginMessage.innerText ="Invalid username or password";
    loginMessage.style.color="red";
  }
}


document.getElementById("signin").addEventListener("click", login);
