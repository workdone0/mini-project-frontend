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

export const addRoomApi = async (name, airConditioned, projector, capacity) => {
  try {
    const response = await axios.post(`${baseURL}/room/new`, {
      name: name,
      airConditioned: airConditioned,
      projector: projector,
      capacity: capacity,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteRoomApi = async (roomId) => {
  try {
    const response = await axios.delete(`${baseURL}/room/${roomId}`);
    return response;
  } catch (error) {
    return error;
  }
};
