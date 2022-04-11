import { PayloadAction } from '@reduxjs/toolkit'
import {call, delay, put, takeLatest } from 'redux-saga/effects'
import {
    joinPayload, joinRequest, joinSuccess, joinFailure
} from '../reducers/user.reducer'
import {} from '../reducers/user.reducer'

function* join(action){
    try{
        alert('*** saga내부 join ***')
        const result = yield call(userAPI.join, action.payload)
        yield put(joinSuccess(result))
        window.location.href = 'user/login'
    }catch(error){
        alert('*** saga 내부 join 실패 ***')
    }
}
export function* watchJoin(){
    yield takeLatest(joinRequest.type, join)
}