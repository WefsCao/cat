import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import writeReducer from './slices/writeSlice';
import postReducer from './slices/postSlice';
import getAllPostReducer from './slices/getAllPostSlice';
import modalReducer from './slices/modalSlice';
import commentsReducer from './slices/commentSlice';
import reactionsReducer from './slices/reactionSlice';
import searchReducer from './slices/searchSice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    write: writeReducer,
    post: postReducer,
    all: getAllPostReducer,
    modal: modalReducer,
    comments: commentsReducer,
    reactions: reactionsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
