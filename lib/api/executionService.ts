import axios from "axios";

export const runCode = async (codeData: { code: string; language: string }) => {
  const response = await axios.post("http://localhost:8080/api/user/code/run", codeData);
  return response.data;
};

export const submitCode = async (codeData: { code: string; language: string }) => {
  const response = await axios.post("http://localhost:8080/api/user/code/submit", codeData);
  return response.data;
};