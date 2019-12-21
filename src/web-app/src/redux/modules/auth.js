/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 07:58:37
 * @modify date 2019-12-14 07:58:37
 * @desc Auth action creators
 */
import { ModuleUtils } from 'Framework';
import { updateObject } from '../utility';

const MODULE_NAME = 'auth';

export const actionTypes = {
    AUTH_USER: `${MODULE_NAME}_AUTH_USER`,
    AUTH_START: `${MODULE_NAME}_AUTH_START`,
    AUTH_SUCCESS: `${MODULE_NAME}_AUTH_SUCCESS`,
    AUTH_FAIL: `${MODULE_NAME}_AUTH_FAIL`,
    AUTH_LOGOUT: `${MODULE_NAME}_AUTH_LOGOUT`,
    AUTH_INITIATE_LOGOUT: `${MODULE_NAME}_AUTH_INITIATE_LOGOUT`,
    AUTH_CHECK_TIMEOUT: `${MODULE_NAME}_AUTH_CHECK_TIMEOUT`
}

export const actions = {
    authSuccess: ModuleUtils.createAction(actionTypes.AUTH_SUCCESS, (token, userId) => ({ token, userId })),
    authFail: ModuleUtils.createAction(actionTypes.AUTH_FAIL, error => error),
    authCheckTimeout: ModuleUtils.createAction(actionTypes.AUTH_CHECK_TIMEOUT, expirationTime => ({ expirationTime: expirationTime })),
    authUser: ModuleUtils.createAction(actionTypes.AUTH_USER, (email, password, isSignUp, history) => ({ email, password, isSignUp, history })),
    authStart: ModuleUtils.createAction(actionTypes.AUTH_START),
    authInitiateLogout: ModuleUtils.createAction(actionTypes.AUTH_INITIATE_LOGOUT),
    authLogout: ModuleUtils.createAction(actionTypes.AUTH_LOGOUT),
}

const reducer = ModuleUtils.handleActions(
    {
        [actionTypes.AUTH_START]: (state, action) => updateObject(state, { error: null, loading: true }),
        [actionTypes.AUTH_SUCCESS]: (state, action) => updateObject(state, {
            token: action.payload.idToken,
            userId: action.payload.userId,
            error: null,
            loading: false,
            isAuthenticated: true
        }),
        [actionTypes.AUTH_FAIL]: (state, action) => updateObject(state, {
            error: action.payload.error,
            loading: false,
            isAuthenticated: false
        }),
        [actionTypes.AUTH_LOGOUT]: (state, action) => updateObject(state, {
            token: null,
            userId: null,
            isAuthenticated: false
        })
    },
    {
        token: null,
        userId: null,
        error: null,
        loading: false,
        isAuthenticated: localStorage.getItem('id_token') ? true : !!(false & localStorage.getItem('user_id'))
    }
);

export default ModuleUtils.assignActions(
    reducer,
    [...Object.values(actionTypes)]
);