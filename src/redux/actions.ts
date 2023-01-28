import { ActionTypes, InitialState } from "./types";

export const ACTIONS = {
  setDefaultData: handleDefaultData,
};

export const sagaActions = {
    getDefaultData : 'GET_DEFAULT_DATA'
}

function handleDefaultData(
  state: InitialState,
  action: ActionTypes
): InitialState {
  return action.payload;
}
