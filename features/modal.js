import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: initialStateValue },
  reducers: {
    appearModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { appearModal } = modalSlice.actions;
export default modalSlice.reducer;
