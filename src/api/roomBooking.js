import axios from "axios";
import axois from "axios";
import { baseURL } from "../baseUrl";

export const roomBookingApi = async (
  userId,
  roomId,
  startTime,
  endTime,
  title
) => {
  try {
    const response = await axois.post(`${baseURL}/roombooking/new`, {
      userId: userId,
      roomId: roomId,
      startTime: startTime,
      endTime: endTime,
      title: title,
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

export const confirmRoomBookingApi = async (bookingId) => {
  try {
    const response = await axios.patch(
      `${baseURL}/roombooking/confirm/${bookingId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const declineRoomBookingApi = async (bookingId) => {
  try {
    const response = await axios.patch(
      `${baseURL}/roombooking/decline/${bookingId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
