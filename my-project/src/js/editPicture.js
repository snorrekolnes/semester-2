import {getUserName} from "./utils/storage";
import {getToken} from "./utils/storage";
import {USER_PROFILE_URL} from "./settings/api";

const userName = getUserName();
const token = getToken();
const URL = USER_PROFILE_URL;

const editImageForm = document.querySelector("#edit-form")

const picURL = document.querySelector("#pic-url")


editImageForm.addEventListener("submit", function(event) {
    event.preventDefault();
   
(async function editImageFunction() {
    const response = await fetch(`${URL}/${userName}/media`, {
    method: "PUT",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`,

    },

    body: JSON.stringify({
        avatar:(picURL.value)
    })
})
    
    const pictureData = await response.json();
    console.log(pictureData);
if(response.ok) {
    console.log("bid made: ", pictureData);
location.href = "/profile.html";
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("making bid Failed"))
    console.log(generalError)
}

createForm.reset();
})
().catch(generalError => {
    console.log(generalError)
});})