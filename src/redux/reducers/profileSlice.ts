import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: "Ivan",
    status: "comon...."
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    },
  }
})

export const { setStatus } = profileSlice.actions
export default profileSlice.reducer