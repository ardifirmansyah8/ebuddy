import { User } from "@ebuddy/shared";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUserData, updateUserData } from "@/apis/userApi";

export const getUser = createAsyncThunk("user/fetchUserData", async () => {
  return await fetchUserData("XgWIBIYEpIAn3anl2ZgS");
});

export const updateUser = createAsyncThunk<string, User>(
  "user/updateUserData",
  async (updatedData) => {
    return await updateUserData(updatedData);
  }
);

const DEFAULT_USER = { id: "", name: "", email: "", age: 0 };

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: DEFAULT_USER,
    isEdit: false,
    fetchLoading: false,
    fetchError: "",
    updateLoading: false,
    updateError: "",
    updateSuccess: false,
  },
  reducers: {
    setIsEdit: (state) => {
      state.isEdit = !state.isEdit;
      state.updateLoading = false;
      state.updateSuccess = false;
      state.updateError = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.fetchLoading = true;
        state.fetchError = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.user = action.payload.data ?? DEFAULT_USER;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.fetchLoading = false;
        state.fetchError = action.error?.message ?? "";
      })
      .addCase(updateUser.pending, (state) => {
        state.updateLoading = true;
        state.updateError = "";
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.updateLoading = false;
        state.updateSuccess = true;
        state.updateError = "";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateLoading = false;
        state.updateError = action.error?.message ?? "";
      });
  },
});

export const { setIsEdit } = userSlice.actions;
export default userSlice.reducer;
