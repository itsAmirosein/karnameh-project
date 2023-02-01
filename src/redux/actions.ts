import { ActionTypes, InitialState, QuestionsType } from "./types";

export const ACTIONS = {
  setDefaultData: handleDefaultData,
  setModalState: handleModalState,
  setModalSubject: handleModalSubject,
  setModalDescription: handleModalDescription,
  modalSubmit: handleModalSubmit,
  setParam: handleParam,
  setLikeOrDislike:handleLikeOrDislike
};

export const sagaActions = {
  getDefaultData: "GET_DEFAULT_DATA",
  setLikeOrDislikeToServer:'SET_LIKE_OR_ISLIKE_TO_SERVER',
};

function handleDefaultData(state: InitialState, action: ActionTypes) {
  return { ...state, ...action.payload };
}
function handleModalState(state: InitialState, action: ActionTypes) {
  if (action.payload === false) {
    state.modalData.description = "";
    state.modalData.subject = "";
  }
  state.modalVisibility = action.payload;
}
function handleModalSubject(state: InitialState, action: ActionTypes) {
  state.modalData.subject = action.payload;
}
function handleModalDescription(state: InitialState, action: ActionTypes) {
  state.modalData.description = action.payload;
}
function handleModalSubmit(state: InitialState) {
  const newQuestion: QuestionsType = {
    title: state.modalData.subject,
    personImage: state.profile.image,
    text: state.modalData.description,
    date: new Date(),
    ID: state.questionsLists.length + 1,
  };
  state.questionsLists.push(newQuestion);
  state.modalData.description = "";
  state.modalData.subject = "";
  state.modalVisibility = false;
}

function handleParam(state: InitialState, action: ActionTypes) {
  state.param = action.payload;
}
function handleLikeOrDislike(state: InitialState, action: ActionTypes) {
 return action.payload 
}
