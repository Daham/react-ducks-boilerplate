/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 07:58:37
 * @modify date 2019-12-14 07:58:37
 * @desc Auth action creators
 */
import { ModuleUtils } from 'Framework';
import {updateObject} from '../utility';

const MODULE_NAME = 'layoutMain';

export const actionTypes = {
    LAYOUT_MAIN: `${MODULE_NAME}_LAYOUT_MAIN`
}

export const actions = {
    layoutMain: ModuleUtils.createAction(actionTypes.LAYOUT_MAIN, () => ({
        type: actionTypes.LAYOUT_MAIN,
        value: actionTypes.LAYOUT_MAIN
    })),
}

const reducer = ModuleUtils.handleActions(
    {
        [actionTypes.LAYOUT_MAIN]: (state, action) => updateObject(state, { layoutOneLocal: action.payload.value })
    },
    {
        layoutOneLocal: null
    }
);

export default reducer;