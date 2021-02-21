import axois from "axios";
import { baseURL } from "../baseUrl";

export const loginApi = async (email, password) => {
  try {
    const response = await axois.post(`${baseURL}/student/login`, {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    return error;
  }
};
