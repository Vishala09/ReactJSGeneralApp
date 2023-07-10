import {call,put,takeEvery,take} from 'redux-saga/effects';
import axios from 'axios';
const BaseApiLink = 'https://dummyjson.com';

function getDataFromAPI(action)
{
    let http = `${BaseApiLink}/quotes`;
    return axios.get(http,
    { headers:{"Content-Type":"application/json"}})
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

function* getDataFromAPIWorkerSaga(action)
{
    try{
            const Result = yield call(getDataFromAPI,action);
            yield put({type:'GET_QUOTES',payload:Result});
    }
    catch(e)
    {

    }
}

export default function* getDataFromAPISaga()
{
    yield takeEvery('GET_QUOTES_REQUESTED',getDataFromAPIWorkerSaga)
}