import axios from "axios";
import { baseURL } from "../baseUrl";

export const getRoomsApi = async () => {
  try {
    const response = await axios.get(`${baseURL}/room/all`);
    return response;
  } catch (error) {
    return error;
  }
};
