/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 07:58:37
 * @modify date 2019-12-14 07:58:37
 * @desc Auth action creators
 */
import { ModuleUtils } from 'Framework';
import {updateObject} from '../utility';

const MODULE_NAME = 'layoutTwo';

export const actionTypes = {
    LAYOUT_TWO_LOCAL: `${MODULE_NAME}_LAYOUT_TWO_LOCAL`
}

export const actions = {
    layoutTwo: ModuleUtils.createAction(actionTypes.LAYOUT_TWO_LOCAL, () => ({
        type: actionTypes.LAYOUT_TWO_LOCAL,
        value: actionTypes.LAYOUT_TWO_LOCAL
    })),
}

const reducer = ModuleUtils.handleActions(
    {
        [actionTypes.LAYOUT_TWO_LOCAL]: (state, action) => updateObject(state, { layoutOneLocal: action.payload.value })
    },
    {
        layoutOneLocal: null
    }
);

export default reducer;