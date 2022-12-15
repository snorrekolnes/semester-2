import  {getUserName} from "../utils/storage";
const API_BASE_URL = "https://api.noroff.dev/"
const userName = getUserName();
// AUTH
const USER_LOGIN_URL = API_BASE_URL + "api/v1/auction/auth/login"
const USER_SIGNUP_URL = API_BASE_URL + "api/v1/auction/auth/register"
const USER_PROFILE_URL = API_BASE_URL + "api/v1/auction/profiles"

/*/<name>?_following=true&_followers=true */

//POSTS
const POST_BIDS_URL = API_BASE_URL + "api/v1/auction/listings"
const CREATE_POST_URL = API_BASE_URL + "api/v1/auction/listings"
const GET_POSTS_URL = API_BASE_URL + "api/v1/auction/listings"
const GET_POST_BY_ID_URL = API_BASE_URL + "api/v1/auction/listings"
const GET_USER_POSTS_URL = API_BASE_URL + `api/v1/auction/profiles/${userName}?_posts=true`
const DELETE_USER_POST_BY_ID = API_BASE_URL + `api/v1/auction/posts`
const EDIT_POST_URL = API_BASE_URL + "api/v1/auction/posts"
const GET_CREDITS = API_BASE_URL + `api/v1/auction/profiles/${userName}`

export {
    USER_PROFILE_URL,
    POST_BIDS_URL,
    GET_CREDITS,
    API_BASE_URL,
    USER_LOGIN_URL,
    USER_SIGNUP_URL,
    CREATE_POST_URL,
    GET_POSTS_URL,
    GET_USER_POSTS_URL,
    DELETE_USER_POST_BY_ID,
    GET_POST_BY_ID_URL,
    EDIT_POST_URL
};