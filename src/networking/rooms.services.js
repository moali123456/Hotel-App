import axios from "axios";
import { BASE_URL, BASE_HEADERS } from "../constants/app-constants";

// ROOMS URL
const BASE_ROOMS = `${BASE_URL}/portal/rooms`;

export const getAllRooms = (page, itemsPerPage) =>
  axios.get(`${BASE_ROOMS}/available?page=${page}&size=${itemsPerPage}`);

export const getRoomDetails = (id) => axios.get(`${BASE_ROOMS}/${id}`);
