import axios from "axios";

const baseUrl = axios.create({
    baseURL: "http://www.omdbapi.com/",
})

export default baseUrl;