import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { API } from "services/api";
import { GetData ,LikeOrDislik} from "services/apiCall";
import { sagaActions } from "./actions";
import { ActionTypes, InitialState } from "./types";
import { mainSlice } from "./reducer";
import produce from "immer";

const { setDefaultData ,setLikeOrDislike} = mainSlice.actions;

function* callGetDefaultDataApi() {
  try {
    const defaultData: { data: InitialState } = yield call(() =>
      GetData(API.home.getDefualtData())
    );
    yield put(setDefaultData(defaultData.data));
  } catch (error) {}
}
function* callSetLikeOrDislikeToServer(action: ActionTypes) {
  try {
    const oldState: InitialState = yield select((state: InitialState) => state);
   const nextState = produce(oldState, (draftState) => {
      const answer = draftState.answersLists.find(
        (item) => +item.ID === +action.payload.ID
      );
      if (action.payload.value && answer) {
        answer.like++;
      } else if (!action.payload.value && answer) {
        answer.dislike++;
      }
    });
    const newData: { data: InitialState } = yield call(() =>
    LikeOrDislik(API.answers.likeOrDislike(),nextState)
    );    
    yield put(setLikeOrDislike(newData.data));
  } catch (error) {}
}

function* getDefaultData() {
  yield takeLatest(sagaActions.getDefaultData, callGetDefaultDataApi);
}
function* setAnswerAction() {
  yield takeLatest(
    sagaActions.setLikeOrDislikeToServer,
    callSetLikeOrDislikeToServer
  );
}

export default function* rootSaga() {
  yield all([getDefaultData(), setAnswerAction()]);
}
