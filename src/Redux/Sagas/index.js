import {all,fork} from 'redux-saga/effects'

import getDataFromAPISaga from './GetProductsApiSaga.js'

export default function* rootSaga(){
    yield all(
        [
           fork(getDataFromAPISaga)
        ]
    )
}