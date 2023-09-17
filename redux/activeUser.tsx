import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../src/models/objects/User";
import { RootState } from "./configureStore";

interface reducerUser {
  currentUser: User;
}

const initialState: reducerUser = {
  currentUser: {
    id: 0,
    name: "",
    lastName: "",
    title: "",
    resume: "",
    punctuation: 0,
    votes: 0,
    photo: "",
    features: [],
    contactData: [],
  },
};
export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const selectCount = (state: RootState) => state.activeUser;

export default userSlice.reducer;
