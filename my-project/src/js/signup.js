import {USER_SIGNUP_URL} from "./settings/api";
import {validatePassword, validateEmail} from "./utils/validation";
import {getToken} from "./utils/storage";
import logInTheUser from "./login";
const token = getToken();

const signUpForm = document.querySelector("#signup-form");

const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const emailNotValid = document.querySelector("#email-not-valid");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password-error");
const confirmPasswordMatching = document.querySelector("#confirm-password-matching");

const generalErrorMessage = document.querySelector("#general-error-message");



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


var eye_2=document.querySelector(".the-eye2");
var pass2=document.querySelector(".password-2");
var seteye_2=document.querySelector(".the-eye2");


eye_2.addEventListener('click',function(){
    if(pass2.type=="password"){
        pass2.type="text";
        seteye_2.classList.remove('fa-eye-slash');
        seteye_2.classList.add('fa-eye');
    }
    else{
        pass2.type="password";
        seteye_2.classList.add('fa-eye-slash');
        seteye_2.classList.remove('fa-eye');
    }
 });

signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let ifFirstName = false;
    if (firstName.value.trim().length > 3) {
        firstNameError.classList.add("hidden");
        ifFirstName = true;
    } else {
        firstNameError.classList.remove("hidden");
    }

    let ifEmail = false;
    if (email.value.trim().length > 0) {
        emailError.classList.add("hidden");
        ifEmail = true;
    } else {
        emailError.classList.remove("hidden");
    }

    let ifEmailValid = false;
    if (email.value.trim().length && validateEmail(email.value) === true) {
        emailNotValid.classList.add("hidden");
        ifEmailValid = true;
    } else if (email.value.trim().length && validateEmail(email.value) !== true) {
        emailNotValid.classList.remove("hidden");
    }

    let ifPassword = false;
    if (password.value.trim().length >=6) {
        passwordError.classList.add("hidden");
        ifPassword = true;
    } else {
        passwordError.classList.remove("hidden");
    }

    let ifConfirmPassword = false;
    if (confirmPassword.value.trim().length >=6) {
        confirmPasswordError.classList.add("hidden");
        ifConfirmPassword = true;
    } else {
        confirmPasswordError.classList.remove("hidden");
    }

    let ifPasswordMatch = false;
    ifPasswordMatch = validatePassword(password.value, confirmPassword.value);
    if (ifPasswordMatch) {
        confirmPasswordMatching.classList.add("hidden");
        ifPasswordMatch = true;
    } else {
        confirmPasswordMatching.classList.remove("hidden");
    }

    let ifFormValid = ifFirstName &&
    ifEmail &&
    ifEmailValid &&
    ifPassword &&
    ifConfirmPassword &&
    ifPasswordMatch;

    if (ifFormValid) {

        console.log("The Validation Was A Success")
        const userData = {
            "name": firstName.value,
            "email": email.value,
            "password": password.value
           
        }
        console.log(userData)
        const REGISTER_USER_URL_ENDPOINT = USER_SIGNUP_URL;
        (async function signUpUser() {
            
            try {
                const response = await fetch(REGISTER_USER_URL_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                      //  "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();
                if (response.ok) {
                    const logInData = {
                        email: userData.email,
                        password: userData.password
                    }
                    logInTheUser(logInData)
                    console.log(data);
                    console.log("success!");
                } else {
                    console.log(data);
                  //  generalErrorMessage.innerHTML = `Sorry :( ${data.message}`
                }
            } catch (e) {
                console.log(e);
            }
        })();

    } else {
        console.log("validation failed :(");
    }
});