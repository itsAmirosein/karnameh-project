import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {mainSlice} from 'redux/reducer'
import saga from 'redux/saga'

const sagaMiddleware = createSagaMiddleware()

export const store  = configureStore({
    reducer: mainSlice.reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
}) 

sagaMiddleware.run(saga)