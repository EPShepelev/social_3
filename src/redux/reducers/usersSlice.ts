import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {name: "user1", avatar: "cat"},
      {name: "user777", avatar: "dog"},
      {name: "luser", avatar: "lobster!"}
    ]
  },
  reducers: {
    findUser(state, action) {
      const user = state.users.find(user => user.name === action.payload)
    }
  }
})

export const { findUser } = usersSlice.actions
export default usersSlice.reducer