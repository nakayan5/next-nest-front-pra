import axios, { AxiosInstance } from "axios";

export const url = "http://localhost:8000";

export const Repository: AxiosInstance = axios.create({
  url: url,
  headers: { "Content-Type": "application/json" },
});
