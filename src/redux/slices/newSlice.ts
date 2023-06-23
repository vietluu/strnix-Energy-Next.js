import { api } from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  isLoading: false,
  hasErr: false,
  data: [],
  dataPost: []
};
export const getData = createAsyncThunk('new/get', async () => {
  const res: any = await api.get('Resource');
  return res.data;
});
export const getPost = createAsyncThunk('new/getpost', async (params:string) => {
  const res: any = await api.get(`Resource?slug=${params}`);
  return res.data;
});

export const newSlice = createSlice({
  name: 'new',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
        state.hasErr = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.hasErr = false;
      })
      .addCase(getData.rejected, (state) => {
        state.hasErr = true;
        state.isLoading = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataPost = action.payload;
        state.hasErr = false;
      })
      .addCase(getPost.rejected, (state) => {
        state.hasErr = true;
        state.isLoading = false;
      })
  },
});
export default newSlice.reducer;
