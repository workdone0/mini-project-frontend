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

export const getOrders = async () => {
  try {
    const response = await axios.get(`${baseURL}/utility/getorder`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getOrderLineApi = async () => {
  try {
    const response = await axios.get(`${baseURL}/utility/orderlines`);
    return response;
  } catch (error) {
    return error;
  }
};

export const addUtilityApi = async (name, inStock, description) => {
  try {
    const response = await axios.post(`${baseURL}/utility/add`, {
      name: name,
      inStock: inStock,
      description: description,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addOrderApi = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/utility/addOrder`, {
      to: data.to,
      from: data.from,
      items: data.items,
      userId: data.userId,
      description: data.description,
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
