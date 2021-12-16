import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from './reducer';
const rootReducer = combineReducers({
    Reducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));