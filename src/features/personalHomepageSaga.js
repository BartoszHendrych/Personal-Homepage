import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { gitHubRespositories } from './perosnalHomepageAPI';
import { fetchRespositoriesError, fetchRespositoriesSuccess, fetchRespositories } from './personalHomepageSlice';

function* fetchRespositoriesHandeler() {
    try {
        yield delay(2000);
        const respositories = yield call(gitHubRespositories);
        yield put(fetchRespositoriesSuccess(respositories));
    } catch (error) {
        yield put(fetchRespositoriesError());
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRespositories.type, fetchRespositoriesHandeler());
}