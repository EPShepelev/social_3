import axios from "axios";
import { authUser } from "./reducers/authSlice";
import { AppDispatch } from "./store";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
});

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
  try {
    const response: any = await axiosInstance.post('/auth/login', {
      email: email,
      password: password,
      rememberMe: rememberMe
    })
    if (response.data.resultCode === 0) {
      dispatch(authUser(response.data.data.userId))
    }
  }
  catch (e) {
    console.log(e)
    console.log("oops...")
  }
}