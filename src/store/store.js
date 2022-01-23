import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStore from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { Reducer } from './user/reducer';
import { ThemeReducer } from './themes/reducer';
const persistConfig = {
    key: 'root',
    storage: AsyncStore,
    whitelist: ['friend']
}

const persistTheme = {
    key: 'themes',
    storage: AsyncStore,
    whitelist: ['theme']
}

const rootReducer = combineReducers({
    Reducer: persistReducer(persistConfig, Reducer),
    ThemeReducer: persistReducer(persistTheme, ThemeReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);