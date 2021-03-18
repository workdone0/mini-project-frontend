import axois from "axios";
import { baseURL } from "../baseUrl";

export const roomBookingApi = async (
  userId,
  roomNo,
  startTime,
  endTime,
  description
) => {
  try {
    const response = await axois.post(`${baseURL}/roombooking/new`, {
      userId: userId,
      roomNo: roomNo,
      startTime: startTime,
      endTime: endTime,
      description: description,
    });
    return response;
  } catch (error) {
    return error;
  }
};
