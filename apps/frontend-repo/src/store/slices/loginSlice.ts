import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { idToken: "" },
  reducers: {
    setIdToken: (state, action) => {
      state.idToken = action.payload;
    },
  },
});

export const { setIdToken } = loginSlice.actions;
export default loginSlice.reducer;
