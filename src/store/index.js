import { createStore, combineReducers } from 'redux';
import setUserData from './user/reducer.js';

const reducers = combineReducers({
    setUserData
})

const store = createStore(reducers,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default store;