import client from "./client";

export const writeReq = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

export const getAllPostReq = () => client.get("/api/posts");
export const readPostReq = (id) => client.get(`/api/posts/${id}`);

export const deletePostReq = (id) => client.delete(`/api/posts/${id}`);
export const updatePostReq = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, { title, body, tags });
