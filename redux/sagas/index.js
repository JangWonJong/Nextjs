import {createStore, applyMiddleware} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'

export const makestore = context => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}
export default function*rootSaga(){
    yield all([fork(watchSignup)])
}

export const wrapper = createWrapper(makestore, {debug:true})