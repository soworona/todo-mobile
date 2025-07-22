import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './slices/todoSlice';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
};

const rootReducer = combineReducers({
        todos: todoReducer
        
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;