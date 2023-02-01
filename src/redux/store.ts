import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {mainSlice} from 'redux/reducer'
import saga from 'redux/saga'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
export const store  = configureStore({
    reducer: mainSlice.reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware,logger),
}) 

sagaMiddleware.run(saga)

 