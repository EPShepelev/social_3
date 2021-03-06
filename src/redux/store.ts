import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import profileSlice from './reducers/profileSlice'
import usersSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    users: usersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = typeof store.dispatch