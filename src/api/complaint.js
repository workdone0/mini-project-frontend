import axios from "axios";
import { baseURL } from "../baseUrl";

export const complaintBookingApi = async (
  userId,
  type,
  roomNo,
  hostelNo,
  description,
  timeFrom,
  timeTo
) => {
  try {
    const response = await axios.post(`${baseURL}/complaint/new`, {
      userId: userId,
      type: type,
      roomNo: roomNo,
      hostelNo: hostelNo,
      description: description,
      timeFrom: timeFrom,
      timeTo: timeTo,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getComplaintsApi = async () => {
  try {
    const response = await axios.get(`${baseURL}/complaint/all`);
    return response;
  } catch (error) {
    return error;
  }
};
