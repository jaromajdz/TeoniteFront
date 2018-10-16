import * as actionTypes from '../actionTypes.js';
import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import axios from '../../axios-instance.js';

import { getChoosen } from './selectors';



function* fetchAuthorsSaga(){
    try {

      yield put({type: actionTypes.FETCH_AUTHORS_STATUS});
      const res = yield axios( 'authors/');
      yield put({type: actionTypes.FETCH_AUTHORS_SUCCESS, data: res.data});
      yield put({type: actionTypes.COPY_ALL});
    } catch (err) {
      yield put({type: actionTypes.FETCH_AUTHORS_FAIL, error: err})

    }
}

function fetchAuthorsStats(keys){
  return axios({
    method: 'post',
    url: 'stats/',
    data: keys
  })
}

function fetchAllStats(){
  return axios({
    method: 'get',
    url: 'stats'
  })
}

function* fetchAuthorsStatsSaga(action){
  const authors = yield select(getChoosen);
  const keys = Object.keys(authors)
  try {
    yield put({type: actionTypes.ERROR_RESET});
    yield put({type: actionTypes.REMOVE_STATS});
    yield put({type: actionTypes.FETCH_STATS_STATUS});
    const res = yield (action.id==='all' ? call(()=>fetchAllStats()) : call(()=>fetchAuthorsStats(keys)))
    yield put({type: actionTypes.FETCH_STATS_SUCESS, data: res.data})
    //console.log(res.data)
  } catch (err) {
    yield put({type: actionTypes.FETCH_STAT_FAIL, err: err})
  }

}

function* addAuthor(action){
   yield put({type: actionTypes.ADD_AUTHOR, id: action.id})
   yield call(()=>fetchAuthorsStatsSaga(action));
}

function* removeAuthor(action){
   yield put({type: actionTypes.REMOVE_AUTHOR, id: action.id})
   const choosen = yield select(getChoosen)
   yield (Object.keys(choosen).length ? call(()=>fetchAuthorsStatsSaga(action)) :
          put({type: actionTypes.REMOVE_STATS}));
}

function* rootSaga(){
  yield takeLatest(actionTypes.FETCH_AUTHORS, fetchAuthorsSaga);
  yield takeEvery(actionTypes.ADD_AUTHOR_AND_STAT, addAuthor);
  yield takeEvery(actionTypes.INIT_REMOVE_AUTHOR, removeAuthor);
  //yield takeEvery(actionTypes.FETCH_ALL_STATS, fetchAllAuthorsStatsSaga);
}

export default rootSaga;
