import client from './client';

export const addReactionReq = ({ commentId, reactionType }) => client.post('/api/reactions/add', { commentId, reactionType });
export const getReactionsReq = (commentId) => client.get('/api/reactions', commentId);
