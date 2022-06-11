import { createAsyncThunk } from '@reduxjs/toolkit';

export const getThunkReq = (type, request) => {
  return createAsyncThunk(`auth/${type}`, async (params) => {
    try {
      const respon = await request(params);
      return respon;
    } catch (error) {
      return error;
    }
  });
};
export const getThunkReqest = (type, request) => {
  return createAsyncThunk(`${type}`, async (params) => {
    try {
      const respon = await request(params);
      return respon;
    } catch (error) {
      return error;
    }
  });
};
export const getThunkReqPost = (type, request) => {
  return createAsyncThunk(`post/${type}`, async (params) => {
    try {
      const response = await request(params);
      return response;
    } catch (error) {
      return error;
    }
  });
};
export const getThunkReqComments = (type, request) => {
  return createAsyncThunk(`comment/${type}`, async (params) => {
    try {
      const response = await request(params);
      return response;
    } catch (error) {
      return error;
    }
  });
};
