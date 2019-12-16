import _ from 'lodash';
import * as reduxActions from 'redux-actions';

const ModuleUtils = {
    ...reduxActions,
    createSubscribedReducer: (reducerFunction, actionTypes = []) => {
        return (state, action) => {
            const { type } = action;
            const isInitializationCall = state === undefined;

            if (!actionTypes.includes(type) && !isInitializationCall) return state;
            return reducerFunction(state, action);
        }
    }
}

export {
    _,
    ModuleUtils
};