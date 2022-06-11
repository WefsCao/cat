import client from './client';

export const searchReq = (username) => client.get(`/api/posts/search?username=${username}`);
