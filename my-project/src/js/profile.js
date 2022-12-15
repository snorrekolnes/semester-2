
import {getUserName} from "./utils/storage";
import {USER_PROFILE_URL} from "./settings/api";
import {getToken} from "./utils/storage";

document.getElementById('nav-toggle').onclick = function(){
  document.getElementById("nav-content").classList.toggle("hidden");
}

const userName = getUserName();

const profilePage = document.querySelector("#profile-main")
console.log(profilePage);

const userNameTag = document.querySelector("#user-name")
console.log(userNameTag);

const listingContainer = document.querySelector("#listing-container")

const emailTag = document.querySelector("#email")

const avatarTag = document.querySelector("#user-avatar")

const creditsTag = document.querySelector("#user-credits")

const winsTag = document.querySelector("#user-wins")

const token = getToken();

console.log(token);

if (!token){
    location.href = "/index.html"
}

(async function getThePosts () {
const response = await fetch(`${USER_PROFILE_URL}/${userName}?_listings=true`, {
    method: "GET",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`
}
})
console.log(response);
if (response.ok) {
    const getPosts = await response.json();
    const theUsersName = getPosts.name
    const userEmail = getPosts.email
    const userAvatar = getPosts.avatar
    const theUserCredits = getPosts.credits
    const sellerWins = getPosts.wins.length
   const listingByUser = getPosts._count.listings
    console.log(listingByUser)

    userNameTag.innerHTML = `${theUsersName}`

    emailTag.innerHTML = `${userEmail}`

    creditsTag.innerHTML = `<p
    class="inline-block text-white no-underline font-Indie hover:text-gray-200 hover:text-underline  px-4"
    href="#"
  >${theUserCredits} credits</p>`

  winsTag.innerHTML = `<p class="text-white text-center px-4 py-0  font-Indie">Wins: ${sellerWins} </p>`

  listingContainer.innerHTML = `<p class="text-white text-center px-4 py-0  font-Indie">Listings: ${listingByUser} </p>`

    if (!userAvatar) {
        return avatarTag.innerHTML =
        `
<div class="profile-picture w-10 h-10 relative">
        <img
          class="rounded-full absolute m-auto flex items-center"
          src="./img/swimmer-profile-main.svg"
          alt=""
        />
      </div>`
    } else {
        return  avatarTag.innerHTML = `<div class="profile-picture w-20 h-20 relative">
        <img
          class="rounded-full absolute m-auto flex w-full h-full items-center"
          src="${userAvatar}"
          alt=""
        />
      </div>`
    }
   



console.log(getPosts);




   

}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("Getting Post Failed"))
    console.log(generalError);
}
})().catch(generalError => {
console.log("Could Not Get Posts");
console.log(generalError);

});