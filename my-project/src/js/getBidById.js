import {getToken} from "./utils/storage";
import {POST_BIDS_URL} from "./settings/api";



const parameterString = window.location.search;
const searchTheParameter = new URLSearchParams(parameterString);
const postId = searchTheParameter.get("post_id");
const token = getToken();
const URL = POST_BIDS_URL;

console.log(POST_BIDS_URL);
console.log(postId);
console.log(token);

const bidForm = document.querySelector("#bid-form")
const bidButton = document.querySelector("#bid-button")
const bidAmount = document.querySelector("#amount")
bidForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if(bidAmount.value) {
(async function makeABidFunction() {
    const response = await fetch(`${URL}/${postId}/bids`, {
    method: "POST",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`,

    },
body: JSON.stringify({
    amount: Number(bidAmount.value)
})
})
    
    const bidData = await response.json();
    console.log(bidData);
if(response.ok) {
   
    console.log("bid made: ", bidData);
location.href = "/homepage.html";
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("making bid Failed"))
}

createForm.reset();
})
().catch(generalError => {
    console.log(generalError)
})};})

/*
    const sortedBids = bidData.bids.sort((a,b) => b.amount - a.amount);
    const lastbid = sortedBids[0];
    console.log(lastbid.amount);

    if (bidAmount < lastbid.amount) {
        console.log("too low amount")
    } else {
        return formvalid;
    }


    if(formValid){

        const bidFormData = {
            "amount": amount.value,
        }
        console.log(bidFormData);
        const token = getToken();
        console.log(token);
       console.log(URL);
    */