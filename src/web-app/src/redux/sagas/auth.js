/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:06:37
 * @modify date 2019-08-18 09:06:37
 * @desc saga generator functions for auth.
 */

import { put, delay } from 'redux-saga/effects';

import { actions as authActions } from '../modules/auth';

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mockAsyncLoginRequest({email, password, returnSecureToken}){
    await timeout(3000);

    if(email==='admin' && password==='admin'){
        return {
            data:{
                idToken: 'MOCK_ID_TOKEN',
                localId: 'MOCK_LOCAL_ID',
                expiresIn: 10
            }
        }
    }
    throw Error('Login Error')
}

export function* logoutSaga(action) {
    yield localStorage.removeItem('id_token');
    yield localStorage.removeItem('user_id');
    yield put(authActions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {

    yield delay(action.expirationTime * 1000)
    yield put(authActions.logout())
}

export function* authSaga(action) {
    yield put(authActions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    let url = '';

    if (!action.isSignUp) {
        url = '';
    }

    try {
        const response = yield mockAsyncLoginRequest(authData);

        let idToken = response.data.idToken;
        let localId = response.data.localId;

        yield localStorage.setItem('id_token', idToken);
        yield localStorage.setItem('user_id', localId);

        yield put(authActions.authSuccess(idToken, localId));
        yield put(authActions.checkAuthTimeout(response.data.expiresIn));

        action.history.push('/');
    } catch (err) {
        yield put(authActions.authFail(err));
    }

}

