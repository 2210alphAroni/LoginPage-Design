
// show hide password 
let passwordIcon = document.querySelector(".fa-eye")
let usernametype = document.querySelector(".username input")
let passwordtype = document.querySelector(".password input");
let icon = document.querySelector('.sign-btn .fa-spinner');
let checkboxtype = document.querySelector(".checkbox-area input")

// use global variable declaration for json access credential
let userData;
// load function which I apply for get access json credential file 
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

// use this function json credential access
function loadRoniAhmedJsonData() {
    fetch('credential.json')
        .then(res => res.json())
        .then(data => userData = data.data);
}

//  if username and password match the show suceess otherwise error.
let btn = document.querySelector(".btn-dark")
let h1tag = document.querySelector("h1")

btn.addEventListener("click", () => {

    // Use for sign in text and load icon adjust
    btn.style.display="none";
    icon.style.display="inline-block";
    icon.classList.add("fa-spinner")

    setTimeout(()=>{
        btn.style.display="inline";
        icon.style.display="none";
        icon.classList.remove("fa-spinner")
    },3000)
    // end

    // use for input get access when button click
    if (usernametype.value === "") {
        alert("Please enter userName fields!")
        h1tag.innerHTML = "Please enter username";
        usernametype.classList.add('errorPass')
    }
    else if (passwordtype.value === "") {
        alert("Please enter Password fields!")
        h1tag.innerHTML = "Please enter password";
        passwordtype.classList.add('errorPass')
    }
    else {
        let checkExisting = userData.find(x => x.userName == usernametype.value && x.password == passwordtype.value)
        if (checkExisting == null) {
            alert("Login Failed");
        } else {
            alert("Login Success");

            // use localstorage for save current success login in localstorage inside developer tools Aplication
            localStorage.setItem('userName', usernametype.value);
            localStorage.setItem('password', passwordtype.value);
            localStorage.setItem('remembar', checkboxtype.value == 'on' ? 'true' : 'false');
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