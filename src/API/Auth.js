import { apiRequest } from "./ApiClient"; // adjust path as needed

export async function signupUser(userData) {
  return apiRequest("/auth/create/", "POST", userData);
}

export async function loginUser({ email, password }) {
  return apiRequest("/auth/login/", "POST", { username: email, password });
}
