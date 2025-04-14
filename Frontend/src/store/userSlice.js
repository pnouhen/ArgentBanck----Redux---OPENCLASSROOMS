import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setData: (state, action) =>{
      state.data = action.payload
    }
  },
});

export const { setToken, clearToken, setData } = userSlice.actions;

export default userSlice.reducer;
