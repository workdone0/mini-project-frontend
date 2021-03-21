import axois from "axios";
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
    const response = await axois.post(`${baseURL}/user/register`, {
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
