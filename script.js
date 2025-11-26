
// show hide password 
let passwordIcon = document.querySelector(".fa-eye")
let usernametype = document.querySelector(".username input")
let passwordtype = document.querySelector(".password input");
let userData;
loadRoniAhmedJsonData();
passwordIcon.addEventListener("click", () => {
    if (passwordtype.type == 'password') {
        passwordtype.type = 'text';
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
    else {
        passwordtype.type = 'password';
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    }
})

function loadRoniAhmedJsonData() {
    fetch('credential.json')
        .then(res => res.json())
        .then(data => userData = data.data);
}
//  if username and password match the show suceess otherwise error.

let btn = document.querySelector(".btn-dark")
let h1tag = document.querySelector("h1")

btn.addEventListener("click", () => {
    if (usernametype.value === "" && passwordtype.value === "") {
        alert("Please enter both fields!")
        h1tag.innerHTML = "Please enter username & password";
    } else {
        let checkExisting = userData.find(x => x.userName == usernametype.value && x.password == passwordtype.value)
        if (checkExisting == null) {
            alert("Login Failed");
        } else {
            alert("Login Success")
        }

        //         userData.forEach((x ,i)=> {
        //             debugger;
        //              if(x.userName == usernametype.value && x.password == passwordtype.value){
        //                 alert('Login Success');
        //                 return;
        //             }else{
        // alert('Login Failed');

        // return;
        //             }
        //         });
        //         console.log(userData);
        //         debugger;
    }
    // else if(usernametype.value === passwordtype.value){  
    //     h1tag.innerHTML="Login Successful";
    //     alert("Login Success")
    // }
    // else{
    //     h1tag.innerHTML="Login Fail";
    //     alert("Login Fail")
    // }
})