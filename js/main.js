function register(){
    let username = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim()
    let confirmPassword = document.getElementById("confirm-password").value.trim()
}


if(!lowerCaseLetter.test(password)){
    regMessage.innerText ="Password must contain a lowercase letter.";
    return;
}

if (password !== confirmPassword){
    regMessage.innerText ="Password not match."
    return;
}
if (number.lengh < 8){
    regMessage.innerText ="Please add phone numbers.";
    return;}

if (password.lengh < 8){
    regMessage.innerText ="Password must be at least 8 characters.";
    return;}

if (!email || !password || !confirmPassword){
        regMessage.innerText="Please fill in all fields"
        return;
    }