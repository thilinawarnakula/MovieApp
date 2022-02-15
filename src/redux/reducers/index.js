
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import MovieReducer from './movieReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist : [],
};

const rootReducer = combineReducers({
  movies: persistReducer(persistConfig, MovieReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);