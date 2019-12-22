/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:06:37
 * @modify date 2019-08-18 09:06:37
 * @desc saga generator functions for auth.
 */

import { put, delay } from 'redux-saga/effects';

import actions  from 'Actions';

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
                expiresIn: 100
            }
        }
    }
    throw Error('Login Error')
}

export function* logoutSaga(action) {
    yield localStorage.removeItem('id_token');
    yield localStorage.removeItem('user_id');
    yield put(actions.auth.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.payload.expirationTime * 1000)
    yield put(actions.auth.authLogout())
}

export function* authSaga(action) {
    yield put(actions.auth.authStart());

    const authData = {
        email: action.payload.email,
        password: action.payload.password,
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

        yield put(actions.auth.authSuccess(idToken, localId));
        yield put(actions.auth.authCheckTimeout(response.data.expiresIn));

        action.payload.history.push('/');

    } catch (err) {
        yield put(actions.auth.authFail(err));
    }

}

