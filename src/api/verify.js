import axois from "axios";
import { baseURL } from "../baseUrl";

export const verifyLoginToken = async (token) => {
  try {
    const response = await axois.post(`${baseURL}/verify/student`, {
      token: token,
    });
    return response;
  } catch (error) {
    return error;
  }
};