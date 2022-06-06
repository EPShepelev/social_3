import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import{ IAuth } from '../../interfaces/IAuth'

const initialState: IAuth = {
  user: {
    userId: null,
    email: null,
    login: null
  },
  isAuth: false,
  error: ""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser(state, action) {
      state.isAuth = true
    },
    fetchUserSuccess(state, action) {
      state.error = ""
      state.user = action.payload
    },
    fetchUserError(state, action: PayloadAction<string>) {
      state.isAuth = false
      state.error = action.payload
    },
  }
})

export const { authUser } = authSlice.actions
export default authSlice.reducer