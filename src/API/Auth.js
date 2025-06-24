export async function signupUser(userData) {
  const response = await fetch(
    "https://charitraa.pythonanywhere.com/auth/create/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Signup failed");
  }

  return response.json();
}
