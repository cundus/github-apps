import axios from "axios";
import { baseUrl } from "../baseUrl";
export const testGet = async () => {
  try {
    const res = await axios.get(`${baseUrl}/zen`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllUser = async () => {
  try {
    const res = await baseUrl.get(`users`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUser = async (username) => {
  try {
    const res = await baseUrl.get(`users/${username}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const res = await baseUrl.get(`users/${username}/repos`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSearch = async (username) => {
  try {
    const res = await baseUrl.get(`search/users?q=${username}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
