import { all } from 'redux-saga/effects';
import { watchJoin } from "./user.saga.ts";

export default function* rootSaga() {
    yield all([watchJoin()]);
}
