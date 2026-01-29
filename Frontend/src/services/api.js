import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getProjects = () => API.get("/projects");
export const getFeedback = () => API.get("/feedback");
export const sendFeedback = (data) => API.post("/feedback", data);
export const sendContact = (data) => API.post("/contact", data);
