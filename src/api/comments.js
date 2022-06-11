import client from './client';

export const addCommentReq = ({ content, postId }) => client.post('/api/comments/add', { content, postId });

export const getCommentsReq = (id) => client.get(`/api/comments/${id}`);
