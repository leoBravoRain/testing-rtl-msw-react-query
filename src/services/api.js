import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});