import axios from "axios";

/* ================= BASE URL ================= */
const BASE_URL = "http://localhost:5000/api";

/* ================= IMAGE BASE URL ================= */
export const IMAGE_URL = "http://localhost:5000";

/* ================= AXIOS INSTANCE ================= */
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= OPTIONAL: GLOBAL ERROR HANDLER ================= */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API ERROR:", error.response.data);
    } else {
      console.error("NETWORK ERROR:", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;