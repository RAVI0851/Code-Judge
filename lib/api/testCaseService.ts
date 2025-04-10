import axios from "axios";

export const getTestCases = async (problemId: number) => {
  const response = await axios.get(`http://localhost:8080/api/public/problem/${problemId}/testCases`);
  return response.data;
};