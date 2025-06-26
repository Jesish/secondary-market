const BASE_URL = "https://charitraa.pythonanywhere.com";

export async function apiRequest(endpoint, method, body = null, token = null) {
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }), // add token if provided
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "API request failed");
  }

  return response.json();
}
