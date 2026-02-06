import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchAllEvents = () => API.get("/events");
export const fetchEventByTx = (hash) => API.get(`/events/tx/${hash}`);
