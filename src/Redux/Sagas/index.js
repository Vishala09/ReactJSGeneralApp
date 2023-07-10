import {all,fork} from 'redux-saga/effects'

import getProductsFromAPISaga from './GetProductsApiSaga.js'
import getQuotesFromAPISaga from './GetQuotesApiSaga.js' 

export default function* rootSaga(){
    yield all(
        [
           fork(getProductsFromAPISaga) , fork(getQuotesFromAPISaga)
        ]
    )
}