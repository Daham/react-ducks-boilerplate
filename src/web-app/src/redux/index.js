/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-14 08:04:35
 * @modify date 2019-12-14 08:04:35
 * @desc Configure Redux
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

 //Sagas
import { watchAuth} from './sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Initialize the saga middleware.
const sagaMiddleware = createSagaMiddleware();

//Create redux store. 
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

//Start sagas.
sagaMiddleware.run(watchAuth);

// Export redux store
export { store };