import {getToken} from "./utils/storage";
import {CREATE_POST_URL} from "./settings/api";
document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

const createListingForm = document.querySelector("#create-listing");

const title = document.querySelector("#title");

const tError = document.querySelector("#title-error");

const listingDescription = document.querySelector("#post-description");

const dateAndTime = document.querySelector("#date-and-time")

const tags = document.querySelector("#listing-tags")

const time = document.querySelector("#ends-at")

const media = document.querySelector("#media-post");

const timeError = document.querySelector("#time-error")

const URL = CREATE_POST_URL;



createListingForm.addEventListener("submit", function(event) {
event.preventDefault();
let  titleValid = false;
if (title.value.trim().length >0){
    tError.classList.add("hidden");
    titleValid=true;
    console.log("Title Valid");
}
else {
tError.classList.remove("hidden");
console.log("The Title Is Not Valid Or Missing");
}

let timeValid = false;
if(dateAndTime.value.trim().length>0){
    timeError.classList.add("hidden")
    timeValid=true;
    console.log("Time valid")
}
else {
    timeError.classList.remove("hidden")
    console.log("no time")
}



let formValid = titleValid && timeValid;

if(formValid){
    console.log(title.value);
    console.log(listingDescription.value)
    console.log(dateAndTime.value)
    const createdData = {
        "title": title.value,
        "description": listingDescription.value,
        "endsAt": dateAndTime.value,
    }
    console.log(createdData);
    const token = getToken();
    console.log(token);
   console.log(URL);


    (async function makeAListing() {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(createdData)
})
console.log(response)
if(response.ok) {
    const listingData = await response.json();
    console.log("post created: ", listingData);
location.href = "/homepage.html";
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("Creating Post Failed"))
}
createForm.reset();
    })().catch(generalError => {
        console.log(generalError)
    });
}
else {
    console.log("Form Is Not Valid")
}
})