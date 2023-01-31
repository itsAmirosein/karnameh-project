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
  modalVisibility: false,
  modalData: {
    subject: "",
    description: "",
  },
  param:undefined
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: ACTIONS,
});

export const {
  setDefaultData,
  setModalState,
  setModalDescription,
  setModalSubject,
  modalSubmit,
  setParam
} = mainSlice.actions;
