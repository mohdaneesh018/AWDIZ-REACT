import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, products: [] },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addProducts: (state, action) => {
      state.products = Array.isArray(action.payload) ? action.payload : [];
    },
    removeProducts: (state, action) => {
      state.products = state.products.filter((p) => p._id !== action.payload);
    },
  },
});

export const { login, logout, setUser, addProducts } = userSlice.actions;

export default userSlice.reducer;
