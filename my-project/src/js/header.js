import {getUserName} from "./utils/storage";
import {GET_CREDITS} from "./settings/api";
import {getToken} from "./utils/storage";
//import {saveUser, saveToken} from "./utils/storage";
const creditsShower = document.querySelector("#credits-show")

const welcomming = document.querySelector("#header-for-main")
console.log(welcomming)

const message = ""
console.log(message)
function createHeaderBar() {
    const {pathname} = document.location;
    const navBar = document.querySelector("#nav-bar");
    const welcome = document.querySelector("#main-header");
    function refreshPage(){
      window.location.reload();
    } 

    if (navBar) {
        const userName = getUserName();
        console.log(userName)
        let navLinks;
       navLinks = `
           <li class="p-8"><a href="/signup.html" class="${pathname === "/signup.html" ? "text-blue-600" : ""}">SignUp</a></li>
           <li class="p-8"><a href="/login.html" class="${pathname === "/login.html" ? "text-blue-600" : ""}">LogIn</a></li>
           `;
     //       let welcomeName;
        if (userName) {
            welcomming.innerHTML = `
            <h1
            class="text-white text-3xl mb-28  text-center"
          >
            Welcome back, ${userName}!
          </h1>
            
`
        } 
        navBar.innerHTML = `
        <ul class="flex">
           ${navLinks}
        </ul>
        `
      }
}


export default createHeaderBar;


const token = getToken();
console.log(token);
(async function getTheCredits() {

  const response = await fetch(GET_CREDITS,{
      method: "GET",
      headers:{ "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    //  body: JSON.stringify()
  }
})
if (response.ok) {
  
  const data = await response.json();
  console.log(data);
  const userCredits = data.credits;
  console.log(userCredits);
  console.log("credits Success")
  creditsShower.innerHTML = (`
  <a
                class="inline-block text-SWIMMER-BLACK no-underline font-Indie hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >${userCredits} credits</a>
  
  `)
}
else {
  const tokenValidErr = await response.json();
       const tokenValidErrMessage = `A Validation Error Happened: ${tokenValidErr.message}`;
             console.log("credits failed");
             
     throw new Error(tokenValidErrMessage);
}}
)().catch(generalError => {
  console.log("Could Not Get credits");
  console.log(generalError);
  
  });
  

/*
/api/v1/auction/profiles/<name>*/

/*
<div class="nav relative z-10 w-full shadow-sm bg-secondary">
        <div class="nav-container w-full bg-secondary fixed top-0 left-0 right-0">
            <nav class="p-5 bg-secondary shadow md:flex md:items-center md:justify-between w-full max-w-screen-lg px-5 mx-auto  ">
              <div class="flex justify-between items-center">
            <a href="homepage.html">   <button class="text-4xl text-main-text cursor-pointer">NERDS</button></a>
               <span class="text-3xl cursor-pointer mx-2 md:hidden block text-white">
                 <ion-icon name="menu" onclick="Menu(this)"></ion-icon>       
               </span>
              </div>
              <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-secondary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
              <li class=" text-white bg-transparent p-4 rounded s" ><button id="profile-btn">${userName}</button></li>
                 <li class=" text-white bg-main-text p-2 rounded hover:bg-hover-btn duration-500" ><button id="logout-btn">SIGN OUT</button></li>
               
              </ul>
             </nav>
          </div>
     </div>





*/