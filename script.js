
// show hide password 
let passwordIcon=document.querySelector(".fa-eye")
let usernametype=document.querySelector(".username input")
let passwordtype=document.querySelector(".password input")

passwordIcon.addEventListener("click",()=>{
    if(passwordtype.type == 'password'){
        passwordtype.type = 'text';
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
    else{
        passwordtype.type = 'password';
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    }
})

//  if username and password match the show suceess otherwise error.

let btn=document.querySelector(".btn-dark")
let h1tag=document.querySelector("h1")

btn.addEventListener("click",()=>{
    if(usernametype.value == passwordtype.value){
        h1tag.innerHTML="Login Successful";
        alert("Login Success")
    }
    else{
        h1tag.innerHTML="Login Fail";
        alert("Login Fail")
    }
})