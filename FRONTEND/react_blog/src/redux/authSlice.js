// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 1️⃣ Initial state
const initialState = { isLoggedIn: false };

// 2️⃣ Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isLoggedIn = true; // user signs in
    },
    signOut: (state) => {
      state.isLoggedIn = false; // user signs out
    },
  },
});

// 3️⃣ Export actions and reducer
export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
