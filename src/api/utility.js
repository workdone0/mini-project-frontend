import axios from "axios";
import { baseURL } from "../baseUrl";

export const getUtilityApi = async () => {
  try {
    const response = await axios.get(`${baseURL}/utility/all`);
    return response;
  } catch (error) {
    return error;
  }
};

export const addUtilityApi = async (name, quantity) => {
  try {
    const response = await axios.post(`${baseURL}/utility/new`, {
      name: name,
      quantity: quantity,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteUtilityApi = async (utilityId) => {
  try {
    const response = await axios.delete(`${baseURL}/utility/${utilityId}`);
    return response;
  } catch (error) {
    return error;
  }
};
