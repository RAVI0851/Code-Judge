import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/public/problems";

export const getProblems = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const searchProblemsByKeyword = async (keyword: string) => {
  const response = await axios.get(`${API_BASE_URL}/keyword/${keyword}`);
  return response.data;
};

export const getFavourites = async () => {
  const response = await axios.get("http://localhost:8080/api/user/favourites");
  return response.data;
};

export const toggleFavourite = async (problemId: number) => {
  const response = await axios.post("http://localhost:8080/api/user/toggle", { problemId });
  return response.data;
};