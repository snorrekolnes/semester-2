// Import our custom CSS
import {GET_CREDITS} from "./settings/api";
import '../scss/styles.scss'
import createHeaderBar from "./header.js";

import {getUserName} from "./utils/storage";

import {clearStorage} from "./utils/storage";
//createHeaderBar();
const userName = getUserName();
const welcome = document.querySelector("#welcome-name");




createHeaderBar();
const outBtn = document.querySelector("#logout-btn");


if (outBtn) {
    outBtn.addEventListener("click", function () {
        clearStorage();
        window.location.replace("/index.html");
    })
}
const profileBtn = document.querySelector("#profile-btn");

if (profileBtn) {
    profileBtn.addEventListener("click", function () {
        window.location.replace("/profile.html");
    })
}
const createBtn = document.querySelector("#create-btn");

if (createBtn) {
  createBtn.addEventListener("click", function () {
      window.location.replace("/createPost.html");
  })
}
