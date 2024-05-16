import axios from "axios";

export const api = axios.create({
  baseURL: 'https://nlw-setup-server-hxxl.onrender.com'
})