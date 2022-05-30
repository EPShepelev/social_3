import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    email:  null,
    login:  null,
    isAuth: false
  },
  reducers: {
    authUser(state, action) {
      state.isAuth = action.payload
    },
  }
})

export const { authUser } = authSlice.actions
export default authSlice.reducer