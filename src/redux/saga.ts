import { all, takeLatest, call, put } from "redux-saga/effects";
import { API } from "services/api";
import { GetData } from "services/apiCall";
import { sagaActions } from "./actions";
import { InitialState } from "./types";
import { mainSlice } from "./reducer";

const { setDefaultData } = mainSlice.actions;

function* callGetDefaultDataApi() {
  try {
    const defaultData: { data: InitialState } = yield call(() =>
      GetData(API.home.getDefualtData())
    );
    yield put(setDefaultData(defaultData.data));
  } catch (error) {}
}

function* getDefaultData() {
  yield takeLatest(sagaActions.getDefaultData, callGetDefaultDataApi);
}

export default function* rootSaga() {
  yield all([getDefaultData()]);
}
