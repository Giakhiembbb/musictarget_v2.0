window.addEventListener("DOMContentLoadeed", (event)=>{
    evnet.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser){
        document.getElementById("dangxuat").innerText =
        loggedInUser.name;
        document.queySelector(".login_singup-container i").className="fa fa-solid fa-right-from-bracket"
    }
})