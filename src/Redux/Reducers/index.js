import { combineReducers } from 'redux';
import {compose,applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas';

import ProductsReducer from './ProductsReducer';
import LoginReducer from './LoginReducer';

const reducer = combineReducers({
  ProductsReducer,LoginReducer
  
})



const sagaMiddleware= createSagaMiddleware();
const store = configureStore({
  reducer,middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

})

sagaMiddleware.run(rootSaga);
export default store;