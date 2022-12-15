import {getUserName} from "./utils/storage";
import {GET_POSTS_URL} from "./settings/api";
import {getToken} from "./utils/storage";
document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}
const welcommingHeader = document.querySelector("#header-for-main")

const user = getUserName();
console.log(user)
if (user){
welcommingHeader.innerHTML = `<h2
class="text-SWIMMER-PINK text-center   m-auto justify-center flex font-Indie mt-0 text-s"
>
Welcome, ${user}!
</h2>`
}





const getPost = document.querySelector("#get-posts");
console.log(getPost);

const postError = document.querySelector("#post-errors")
console.log(postError);

const token = getToken();
const getURL = GET_POSTS_URL ;
console.log(getURL)
console.log(token);
console.log(getURL);
if (!token){
    location.href = "/index.html"
}

(async function getThePosts () {
    
const response = await fetch("https://api.noroff.dev/api/v1/auction/listings/?_seller=true&_bids=true&sort=created&sortOrder=desc", {
    method: "GET",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`
}
})
console.log(response);
if (response.ok) {
    const getListings = await response.json();
console.log(getListings);
if (!getListings.length) {
    postError.innerHTML = `No Listings`
}
else {
    const postLists = getListings.map((post) => {
        console.log(post);
        const postId = post.id;
       // console.log(postId)
        //const seller= `https://api.noroff.dev/api/v1/auction/listings/${postId}?_seller=true&_bids=true`
       // console.log(seller);
       
       const seller = post.seller.name;
        const userAvatar = post.seller.avatar;
        const userNameForPosts = post.seller.name;
      //  const postMedia = post.media;
        const listingTitle = post.title;
        const postDescription = post.description;
        const sellerAvatar = post.seller.avatar;
       //console.log(userAvatar)
      //  console.log(userNameForPosts)
      //  console.log(postMedia)
     //   console.log(seller)
     if (!postDescription){
      return "";
     }
    
     
var postMedia = post.media
var mediaArrayLength = postMedia.length;
for (var i = 0; i < mediaArrayLength; i++) {
    console.log(postMedia[i]);
} 

    
/*
const bids = post.bids

if (bids.length < 1) {
return "no bids"
} else {
    return bids= bids[bids.length - 1].amount
}
*/


if (postMedia.length === 0){
  return ""
      }
     
        if (userAvatar === ""){
            if (postMedia === ""){
                return (`
               
                `
                )
               } else {
                return (`
              
                `
    )}}
        else {
            if (postMedia === ""){
                return (`
                
                `
                )
    } else {
                return (`
                <a href="/specific.html?post_id=${post.id}"       <div
          id="the-box"
          class="box-border relative h-56  m-auto w-56 flex flex-wrap flex-col tablet:w-72 items-center text-center  p-4 overflow-hidden border-4 mt-2" >
       
        <p class="text-white font-Josefin ">${listingTitle}</p>
       
        <img class="object-center text-center object-fit h-20 w-30  " src="${postMedia[0]}" alt="">

        <div class="profile-picture p-2">
                  <img
                    class="rounded-full absolute bottom-2 left-1 w-10 h-10"
                    src="${sellerAvatar}"
                    alt=""
                  />
                </div>

        <p class="text-white absolute bottom-3 left-12 font-Indie"> ${seller}</p>


        <p class="text-white absolute bottom-2 right-2 font-Indie"> </p>

        </div>
        </a>
                
                
                `
    )}
    }   
    })
    .join('');
getPost.insertAdjacentHTML('beforeend', postLists);
}
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("Getting Listings Failed"))
}
})().catch(generalError => {
console.log("Could Not Get Listings");
console.log(generalError);
postError.innerHTML = generalError
});