import axios from "axios";
import axois from "axios";
import { baseURL } from "../baseUrl";

export const roomBookingApi = async (
  userId,
  roomId,
  startTime,
  endTime,
  description
) => {
  try {
    const response = await axois.post(`${baseURL}/roombooking/new`, {
      userId: userId,
      roomId: roomId,
      startTime: startTime,
      endTime: endTime,
      description: description,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getRoomBookingsApi = async () => {
  try {
    const response = await axios.get(`${baseURL}/roombooking/all`);
    return response;
  } catch (error) {
    return error;
  }
};
