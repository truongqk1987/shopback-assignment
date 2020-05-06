import { put, takeEvery, call } from 'redux-saga/effects'
import {
    LOAD_SHOPBACK_DATA_SUCCESSFUL,
    LOAD_SHOPBACK_DATA_FAILED,
    LOAD_SHOPBACK_DATA
} from 'actions/ShopbackActionCreator';

const SHOPBACK_API = 'https://gist.githubusercontent.com/poepanda/004af517163df9b539628e9d307e5d76/raw/9fbf3c35f67c9d6e0e85de8b636b6b7a2f2952bf/categories-and-stores.json'

// Our worker Saga: will perform the async increment task
export function* loadShopbackData() {
    try {
        const dataResponse = yield call(fetch, SHOPBACK_API);
        const data = yield dataResponse.json();
        yield put({ type: LOAD_SHOPBACK_DATA_SUCCESSFUL, data })
    } catch(error) {
        yield put({ type: LOAD_SHOPBACK_DATA_FAILED, error })
    }
  
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadShopbackData() {
  yield takeEvery(LOAD_SHOPBACK_DATA, loadShopbackData)
}