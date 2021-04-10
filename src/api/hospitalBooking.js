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

export const getAppointmentsApi = async () => {
  try {
    const response = await axios.get(`${baseURL}/hospitalbooking/all`);
    return response;
  } catch (error) {
    return error;
  }
};

export const confirmAppointmentApi = async (appointmentId) => {
  try {
    const response = await axios.patch(
      `${baseURL}/hospitalbooking/confirm/${appointmentId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const editAppointmentApi = async (appointmentId, description) => {
  try {
    const response = await axios.patch(
      `${baseURL}/hospitalbooking/edit/${appointmentId}`,
      {
        description: description,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
