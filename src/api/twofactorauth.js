import axios from "axios";
import axois from "axios";
import { baseURL } from "../baseUrl";

export const sendOtp = async (email) => {
  try {
    const response = await axois.post(`${baseURL}/mailer/sendOtp/${email}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const verifyOtp = async (userId) => {
  try {
    const response = await axios.patch(`${baseURL}/mailer/verify/${userId}`);
    return response;
  } catch (error) {
    return error;
  }
};
