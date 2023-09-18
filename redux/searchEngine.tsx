import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../src/models/objects/User";
import { RootState } from "./configureStore";
import { CompanySearch, UserSearch } from "../src/models/objects/SearchEngine";

interface reducerSearch {
  userSearch: UserSearch;
  companySearch: CompanySearch;
}

const initialState: reducerSearch = {
  userSearch: {
    name: "",
    punctuation: [0, 0],
    features: [],
  },
  companySearch: {
    title: "",
    punctuation: [0, 0],
    features: [],
  },
};
export const searchSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUserSearch: (state, action: PayloadAction<UserSearch>) => {
      state.userSearch = action.payload;
    },
    setCompanySearch: (state, action: PayloadAction<CompanySearch>) => {
      state.companySearch = action.payload;
    },
  },
});

export const { setUserSearch, setCompanySearch } = searchSlice.actions;

export default searchSlice.reducer;
