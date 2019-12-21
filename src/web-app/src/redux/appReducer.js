/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-21 15:00:58
 * @modify date 2019-12-21 15:00:58
 * @desc App Reducer
 */

import { _ } from 'Framework';
import { Map } from 'immutable';
import moduleSet from './config/moduleSet';

let moduleReducerMap = {};
let actionReducerMap = {};

_.forEach(moduleSet, (module, ) => {
    let actionsReducerObj = require('./modules/' + module).default

    //Reducer function against module
    moduleReducerMap[module] = actionsReducerObj.reducerFunction;

    //Modules against actions
    _.forEach(actionsReducerObj.actionTypes, (actionType) => {
        if (actionReducerMap[actionType]) {
            actionReducerMap[actionType] = [...actionReducerMap[actionType], module];
            return;
        }
        actionReducerMap[actionType] = [module];
    });
});

export const INITIAL_STATE = Map();

export default (state = INITIAL_STATE, action) => {

    const actionType = action.type;

    if (actionReducerMap[actionType]) {
        _.forEach(actionReducerMap[actionType], (module) => {
            try {
                state = state.set(module, moduleReducerMap[module](state.get(module), action));
            } catch (e) {
                console.error(`${module} reducer doesnt handle ${actionType} properly`, e);
            }
        });
    }

    return state;
};
