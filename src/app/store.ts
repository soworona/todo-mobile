import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
}
const store = configureStore({
    reducer: {
        todos:todosReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch