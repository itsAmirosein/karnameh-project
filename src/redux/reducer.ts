import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import { ACTIONS } from "./actions";

const initialState: InitialState = {
  answersLists: [],
  profile: {
    image: "",
    name: "",
  },
  questionsLists: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: ACTIONS,
});
