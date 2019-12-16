/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 06:50:23
 * @modify date 2019-12-14 06:50:23
 * @desc Root reducer
 */
import { combineReducers } from 'redux';

import moduleSet from './config/moduleSet';

let state = {};

_.forEach(moduleSet, (module, ) => {
    state[module] = require('./modules/' + module).default
});

//Initialize the root reducer.
const rootReducer = combineReducers(state);

export default rootReducer;