import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "don_ho_ni",
  initialState: {
    userInfo: null, // Will store user data here
  },
  reducers: {
    // Action to save user data to Redux store
    loginUser: (state, action) => {
      state.userInfo = action.payload; // ✅ This should update the store
      localStorage.setItem("UserHoni",JSON.stringify(action.payload));
    },
    // Action to clear user data (logout)
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

// Export the actions to use in components
export const { loginUser, logout } = authSlice.actions;

// Export the reducer to add to store
export default authSlice.reducer;
