import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/user/submissions";

export const getSubmissions = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const getSubmissionById = async (submissionId: number) => {
  const response = await axios.get(`${API_BASE_URL}/${submissionId}`);
  return response.data;
};

export const getSolvedProblems = async () => {
  const response = await axios.get("http://localhost:8080/api/user/solved");
  return response.data;
};

export const markProblemAsSolved = async (problemId: number) => {
  const response = await axios.post(`http://localhost:8080/api/user/solved/${problemId}`);
  return response.data;
};