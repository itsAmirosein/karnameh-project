import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { API } from "services/api";
import { GetData, LikeOrDislik } from "services/apiCall";
import { sagaActions } from "./actions";
import { ActionTypes, AnswersType, InitialState, QuestionsType } from "./types";
import { setNewAnswer, setDefaultData, setLikeOrDislike, modalSubmit } from "./reducer";
import produce from "immer";

// const { setDefaultData ,setLikeOrDislike} = mainSlice.actions;

function* callGetDefaultDataApi() {
  try {
    const defaultData: { data: InitialState } = yield call(() =>
      GetData(API.home.getDefualtData())
    );
    yield put(setDefaultData(defaultData.data));
  } catch (error) {}
}
function* setLikeOrDislikeToServerApiCall(action: ActionTypes) {
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
      LikeOrDislik(API.answers.likeOrDislike(), {
        answersLists: nextState.answersLists,
        profile: nextState.profile,
        questionsLists: nextState.questionsLists,
      })
    );
    yield put(setLikeOrDislike(newData.data));
  } catch (error) {}
}
function* newAnswerToServerApiCall(action: ActionTypes) {
  try {
    const oldState: InitialState = yield select((state: InitialState) => state);
    const nextState = produce(oldState, (draftState) => {
      const newAnswer: AnswersType = {
        date: new Date(),
        dislike: 0,
        like: 0,
        name: draftState.profile.name,
        personImage: draftState.profile.image,
        text: action.payload,
        ID: draftState.answersLists.length + 1,
        Q_ID: draftState?.param as number,
      };
      draftState.answersLists.push(newAnswer);
    });
    const newData: { data: InitialState } = yield call(() =>
      LikeOrDislik(API.answers.likeOrDislike(), {
        answersLists: nextState.answersLists,
        profile: nextState.profile,
        questionsLists: nextState.questionsLists,
      })
    );
    yield put(setNewAnswer(newData.data));
  } catch (error) {}
}
function* newQuestionToServerApiCall(action: ActionTypes) {
  try {
    const oldState: InitialState = yield select((state: InitialState) => state);
    const nextState = produce(oldState, (draftState) => {
      const newQuestion: QuestionsType = {
        title: draftState.modalData.subject,
        personImage: draftState.profile.image,
        text: draftState.modalData.description,
        date: new Date(),
        ID: draftState.questionsLists.length + 1,
      };
      draftState.questionsLists.push(newQuestion);
    });
    const newData: { data: InitialState } = yield call(() =>
      LikeOrDislik(API.answers.likeOrDislike(), {
        answersLists: nextState.answersLists,
        profile: nextState.profile,
        questionsLists: nextState.questionsLists,
      })
    );
    yield put(modalSubmit(newData.data));
  } catch (error) {}
}

function* getDefaultData() {
  yield takeLatest(sagaActions.getDefaultData, callGetDefaultDataApi);
}
function* setAnswerActionToServer() {
  yield takeLatest(
    sagaActions.setLikeOrDislikeToServer,
    setLikeOrDislikeToServerApiCall
  );
}
function* setNewAnswerToServer() {
  yield takeLatest(sagaActions.setNewAnswerToServer, newAnswerToServerApiCall);
}
function* setNewQuestionToServer() {
  yield takeLatest(
    sagaActions.setNewQuestionToServer,
    newQuestionToServerApiCall
  );
}

export default function* rootSaga() {
  yield all([
    getDefaultData(),
    setAnswerActionToServer(),
    setNewAnswerToServer(),
    setNewQuestionToServer(),
  ]);
}
