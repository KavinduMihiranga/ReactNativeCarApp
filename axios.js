import axios from "axios";

//base_url
const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:8080/CarMobileAppSpring_war/api/v1/'
    // Header
    // timeout
})
export default instance;