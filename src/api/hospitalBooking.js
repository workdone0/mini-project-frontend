import axios from "axios";
import { baseURL } from "../baseUrl";

export const hospitalBookingApi = async (userId, time) => {
  try {
    const response = await axios.post(`${baseURL}/hospitalbooking/new`, {
      userId: userId,
      time: time,
    });
    return response;
  } catch (error) {
    return error;
  }
};
