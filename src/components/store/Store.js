import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "hamayoon",
    email: "hamayoon@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
const store = configureStore({
  reducer: userSlice.reducer,
});
export default store;
export const { update } = userSlice.actions;
