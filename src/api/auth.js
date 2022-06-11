import client from "./client";

export const registerReq = ({ username, password }) => {
  return client.post("/api/auth/register", { username, password });
};
export const loginReq = ({ username, password }) => {
  return client.post("/api/auth/login", { username, password });
};

export const checkReq = ({ username }) => {
  return client.get("/api/auth/check", { username });
};
export const logoutReq = () => {
  return client.post("/api/auth/logout");
};
