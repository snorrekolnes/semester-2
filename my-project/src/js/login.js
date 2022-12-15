import {USER_LOGIN_URL} from "./settings/api";
import {validateEmail} from "./utils/validation";
import {saveUser, saveToken} from "./utils/storage";

const loginWithThis = document.querySelector("#go-to-login")
console.log(loginWithThis);

const signUpWithThis = document.querySelector("#go-to-signup")
console.log(signUpWithThis)

const inlogForm = document.querySelector("#login-content");
console.log(inlogForm);

const loginBtn = document.getElementById("loginButton-1")
console.log(loginBtn);

const emailPlace = document.getElementById("email")
console.log(emailPlace);

const emailError = document.getElementById("mail-error")
console.log(emailError);

const mailValitation = document.getElementById("email-valitation")
console.log(mailValitation);

const passwordPlace = document.getElementById("password-input") 
console.log(passwordPlace);

const passwordError = document.getElementById("password-error")
console.log(passwordError);

const generalErrorMessage = document.querySelector("#general-error-message");


const LOGIN_ENDPOINT = `${USER_LOGIN_URL}`;

async function logInTheUser(loginData) {
    try {
    const response = await fetch(LOGIN_ENDPOINT,{
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify(loginData)
});
if (response.ok) {
    const data = await response.json();
    console.log(data);
    console.log(data.accessToken)
    saveToken(data.accessToken);
    const saveTheUser = {
        name: data.name,
        email: data.email
    }
    console.log(saveTheUser);
    saveUser(saveTheUser);
    console.log("Login Success")
    location.href = "/homepage.html"
}
else {
    const tokenValidErr = await response.json();
         const tokenValidErrMessage = `A Validation Error Happened: ${tokenValidErr.message}`;
               console.log("Login failed");
               
       throw new Error(tokenValidErrMessage);
}
}
catch(tokenValidErr){
    generalErrorMessage.innerHTML = `Sorry !! ${tokenValidErr.message}`
};}
/*
signUpWithThis.onclick = function(event) {
    location.href = "/signup.html"
}*/
var eye_1=document.querySelector(".the-eye");
var pass1=document.querySelector(".password-1");
var seteye_1=document.querySelector(".the-eye");


eye_1.addEventListener('click',function(){
    if(pass1.type=="password"){
        pass1.type="text";
        seteye_1.classList.remove('fa-eye-slash');
        seteye_1.classList.add('fa-eye');
    }
    else{
        pass1.type="password";
        seteye_1.classList.add('fa-eye-slash');
        seteye_1.classList.remove('fa-eye');
    }
 });

if (inlogForm) {
inlogForm.onsubmit = function(event){
event.preventDefault();


 


var ifEmail = false;
if (emailPlace.value.trim().length > 0){
    emailError.classList.add("hidden")
    ifEmail = true;
    
}
else {
    emailError.classList.remove("hidden")
}


let ifEmailValid = false;

    if (emailPlace.value.trim().length && validateEmail(emailPlace.value) === true) {

        mailValitation.classList.add("hidden");

        ifEmailValid = true;

    } else if (emailPlace.value.trim().length && validateEmail(emailPlace.value) !== true) {

        mailValitation.classList.remove("hidden");

    }


let ifPassword = false;
if (passwordPlace.value.trim().length >=6) {
    passwordError.classList.add("hidden");
    ifPassword = true;
} else {
    passwordError.classList.remove("hidden");
}
let ifValidForm = ifEmail && ifEmailValid && ifPassword;

if (ifValidForm) {
    console.log("The Validation Was A Success")
    const validationData = {
        "email": emailPlace.value,
        "password": passwordPlace.value
    }


logInTheUser(validationData)
}};}

export default logInTheUser