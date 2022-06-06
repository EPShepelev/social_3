import axios from "axios";
import { AppDispatch } from "./store";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/',
});

export const fetchAuthData = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response:any = await axiosInstance.post('/auth/login', {
      email: email,
      password: password,
      rememberMe: false //temp hardoced
    })
    if (response.resultCode === 0) {
      console.log("yeah!")
    }
    else {
      console.log("oops...")
    }
  }
  catch (e) {}
}