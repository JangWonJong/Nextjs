import {takeLatest, all, delay, put, call } from 'redux-saga/effects'
import { watchJoin } from './user.saga'


export  function* rootSaga(){
    yield all([fork(watchSignup)])
}

