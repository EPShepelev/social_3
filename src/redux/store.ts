import { createSlice, configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import profileSlice from './reducers/profileSlice'
import usersSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    posts: authSlice,
    comments: profileSlice,
    users: usersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = typeof store.dispatch