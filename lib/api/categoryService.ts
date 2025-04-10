import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/public/categories";

export const getCategories = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};