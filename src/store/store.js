import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStore from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { Reducer } from './user/reducer';
const persistConfig = {
    key: 'root',
    storage: AsyncStore,
    whitelist: ['friend']
}


const rootReducer = combineReducers({
    Reducer: persistReducer(persistConfig, Reducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);