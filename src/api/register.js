import axios from "axios";
import { baseURL } from "../baseUrl";

export const registerApi = async (
  name,
  phone,
  email,
  password,
  clg_id,
  type
) => {
  try {
    const response = await axios.post(`${baseURL}/user/register`, {
      name: name,
      phone: phone,
      email: email,
      password: password,
      clg_id: clg_id,
      type: type,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePwd = async (token, password) => {
  try {
    const response = await axios.patch(`${baseURL}/user/updatepwd`, {
      token: token,
      password: password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateProfile = async (email, uPwd, cPwd) => {
  try {
    const response = await axios.patch(`${baseURL}/user/updateProfile`, {
      email: email,
      uPwd: uPwd,
      cPwd: cPwd,
    });
    return response;
  } catch (error) {
    return error;
  }
};
