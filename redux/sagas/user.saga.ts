import { PayloadAction } from '@reduxjs/toolkit'
import {call, delay, put, takeLatest } from 'redux-saga/effects'
import { JoinPayload, joinSuccess, joinRequest } from '../reducers/userReducer'
import { joinApi } from '../api/userApi'

function* join(action: PayloadAction<JoinPayload>){
    try{
        alert('*** saga내부 join ***')        
    }catch(error){
        alert('*** saga 내부 join 실패 ***')
    }
}
export function* watchJoin(){
    yield takeLatest(joinRequest.type, join)
}