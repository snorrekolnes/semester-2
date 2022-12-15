import {getToken} from "./utils/storage";
import {GET_POST_BY_ID_URL} from "./settings/api";
document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}


const parameterString = window.location.search;
const searchTheParameter = new URLSearchParams(parameterString);
const postId = searchTheParameter.get("post_id");
const token = getToken();
const singlePost = document.querySelector("#single-post");
const URL = GET_POST_BY_ID_URL;
console.log(singlePost);
console.log(GET_POST_BY_ID_URL);
console.log(postId);
console.log(token);
//const likeBtn = document.querySelector("#post-likes")
const timer = document.querySelector("#demo")
console.log(timer)

const currentAmount =document.querySelector("#current-amount")


async function getById() {
    const response = await fetch(`${URL}/${postId}?_seller=true&_bids=true`, {
    method: "GET",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    }}
    )



    console.log(response);
    const listingByIdData = await response.json();
    console.log(listingByIdData);
    



    const {title, description, created, updated, id, endsAt, bids} = listingByIdData;
    console.log(title);
    console.log(description);
    console.log(created);
    console.log(updated);
    console.log(id);
    console.log(endsAt);
    console.log(bids)


    if (listingByIdData.bids.length > 0) {
    const sortedBids = listingByIdData.bids.sort((a,b) => b.amount - a.amount);
    const lastbid = sortedBids[0];
    console.log(lastbid.amount);
    const bidAmount = document.querySelector("#amount")

    bidAmount.min = lastbid.amount+1;

    currentAmount.innerHTML = `Highest bid: ${lastbid.amount}`
    }
  


 

    

    const whenPostUpdated = listingByIdData.updated;
    const theAvatar = listingByIdData.seller.avatar;
   // const postMedia = listingByIdData.media;
    const theSeller = listingByIdData.seller.name;
    const titleOfListing = listingByIdData.title;
    const endsAtThisTime = listingByIdData.endsAt;
    const sellerWins = listingByIdData.seller.wins.length;
    console.log(sellerWins)

   
    var postMedia = listingByIdData.media;
    var mediaArrayLength = postMedia.length;
    for (var i = 0; i < mediaArrayLength; i++) {
        console.log(postMedia[i]);
    } 


    var countDownDate = new Date(endsAtThisTime).getTime();


    var x = setInterval(function() {

      var now = new Date().getTime();
    

      var distance = countDownDate - now;
    

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

     timer.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    

      if (distance < 0) {
        clearInterval(x);
       timer.innerHTML = "EXPIRED";
      }
    }, 1000);




   

if (theAvatar === ""){
    if (postMedia === ""){
      return  singlePost.innerHTML = (`

        `
                  )
  } else {
        return singlePost.innerHTML =(`
       
        `
)}}
else {
    if (postMedia === ""){
        return singlePost.innerHTML =(`
            
        `
        )
} else {
        return singlePost.innerHTML =(`
              <div
        id="the-box"
        class="box-border relative h-64  m-auto w-56 flex flex-wrap flex-col tablet:w-96 items-center text-center  p-4 overflow-hidden border-4 mt-2" >
     
      <p class="text-white font-Josefin ">${titleOfListing}</p>
     
      <img class="object-center text-center object-fit h-20 w-30  " src="${postMedia[0]}" alt="">

      <p class="text-white absolute flex  text-center mt-32 font-Indie"> ${description}</p>

      <div class"seller ">
                <img
                  class="rounded-full absolute bottom-2 left-1 w-10 h-10"
                  src="${theAvatar}"
                  alt=""
                />
              </div>

      <p class="text-white absolute bottom-3 left-12 font-Indie"> ${theSeller}</p>


      <p class="text-white absolute bottom-3 right-2 font-Indie">Wins: ${sellerWins} </p>
      </div>
      </div>
    




        `
)}

}



}
getById();




