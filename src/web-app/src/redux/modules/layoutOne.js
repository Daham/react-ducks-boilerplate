/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 07:58:37
 * @modify date 2019-12-14 07:58:37
 * @desc Auth action creators
 */
import { ModuleUtils } from 'Framework';
import { updateObject } from '../utility';
import allActionTypes from 'ActionTypes';

const MODULE_NAME = 'layoutOne';

export const actionTypes = {
    LAYOUT_ONE_LOCAL: `${MODULE_NAME}_LAYOUT_ONE_LOCAL`
}

export const actions = {
    layoutOne: ModuleUtils.createAction(actionTypes.LAYOUT_ONE_LOCAL, () => ({
        type: actionTypes.LAYOUT_ONE_LOCAL,
        value: actionTypes.LAYOUT_ONE_LOCAL
    })),
}

const reducer = ModuleUtils.handleActions(
    {
        [actionTypes.LAYOUT_ONE_LOCAL]: (state, action) => updateObject(state, { layoutOneLocal: action.payload.value }),
        [allActionTypes.layoutMain.LAYOUT_MAIN]: (state, action) => updateObject(state, { layoutOneLocal: action.payload.value })
    },
    {
        layoutOneLocal: null
    }
);

export default ModuleUtils.assignActions(
    reducer,
    [...Object.values(actionTypes),
    allActionTypes.layoutMain.LAYOUT_MAIN]
);