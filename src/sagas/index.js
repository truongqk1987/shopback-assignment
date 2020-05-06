import { all } from 'redux-saga/effects'
import { watchLoadShopbackData } from './shopbackSaga';

export default function* rootSaga() {
    yield all([
        watchLoadShopbackData()
    ])
  }