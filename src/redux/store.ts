import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import { userAPI } from './services/userAPI'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

// 4. Creamos el store que va a contener las distintas partes del estado
const store = configureStore({
  reducer: {
    counterReducer,
    [userAPI.reducerPath]: userAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userAPI.middleware])
})

// Esto es para que el listener de redux-toolkit funcione
setupListeners(store.dispatch)

export default store

// Esto es para typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
