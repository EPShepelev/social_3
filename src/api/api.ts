import axios from "axios";

const axiosInstaice = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "be9a2f09-e73c-47b1-938e-5e4d5e8badb9",
  },
});

// export const AuthAPI = {
//   getAuthUserData() {
//     return axiosInstaice.get(`auth/me`).then((response) => response.data);
//   },
//   login(email, password, rememberMe) {
//     return axiosInstaice
//       .post(`auth/login`, { email, password, rememberMe })
//       .then((response) => response.data);
//   },
//   logout() {
//     return axiosInstaice.delete(`auth/login`).then((response) => response.data);
//   },
// };