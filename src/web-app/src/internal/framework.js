/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-21 15:00:05
 * @modify date 2019-12-21 15:00:05
 * @desc [description]
 */

import _ from 'lodash';
import * as reduxActions from 'redux-actions';

const ModuleUtils = {
    ...reduxActions,
    assignActions: (reducerFunction, actionTypes = []) => ({ reducerFunction, actionTypes })
}

export {
    _,
    ModuleUtils
};