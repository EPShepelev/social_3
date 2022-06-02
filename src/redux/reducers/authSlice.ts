import { createSlice } from '@reduxjs/toolkit'
import{ IAuth } from '../../interfaces/IAuth'

const initialState: IAuth = {
  userId: null,
  email:  null,
  login:  null,
  isAuth: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser(state, action) {
      state = action.payload
    },
  }
})

export const { authUser } = authSlice.actions
export default authSlice.reducer