import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let csrfToken = null;

export async function getCsrfToken() {
  if (csrfToken) return csrfToken;
  const response = await api.get("/csrf-token");
  csrfToken = response.data?.csrfToken;
  return csrfToken;
}

export async function securePost(endpoint, payload) {
  const token = await getCsrfToken();
  return api.post(endpoint, payload, {
    headers: {
      "X-CSRF-Token": token,
    },
  });
}

export async function fetchCollection(endpoint, fallback = []) {
  try {
    const response = await api.get(endpoint);
    return response.data?.data || fallback;
  } catch {
    return fallback;
  }
}
