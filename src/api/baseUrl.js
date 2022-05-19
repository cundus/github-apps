import axios from "axios";

// create baseUrl
export const baseUrl = axios.create({
  baseURL: "http://api.github.com",
  timeout: 5000,
});
