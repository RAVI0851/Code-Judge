import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

export const signIn = async (credentials: { username: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/signin`, credentials);
  return response.data;
};

export const signUp = async (userData: { username: string; password: string; email: string }) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, userData);
  return response.data;
};