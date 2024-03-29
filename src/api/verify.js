import axois from "axios";
import { baseURL } from "../baseUrl";

export const verifyLoginToken = async (token) => {
  try {
    const response = await axois.post(`${baseURL}/verify/user`, {
      token: token,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const verifyForgotLink = async (token) => {
  try {
    const response = await axois.post(`${baseURL}/verify/forgotlink`, {
      token: token,
    });
    return response;
  } catch (error) {
    return error;
  }
};
