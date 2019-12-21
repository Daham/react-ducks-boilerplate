/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 06:50:23
 * @modify date 2019-12-14 06:50:23
 * @desc Root reducer
 */
import { combineReducers } from 'redux';

import appRootReducer from './appReducer';

//Initialize the root reducer.
export default combineReducers({
  app: appRootReducer
});
