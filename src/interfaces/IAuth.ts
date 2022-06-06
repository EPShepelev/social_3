
export interface IAuth {
  isAuth: boolean
  error: string
  user: IUser
}

export interface IUser {
  userId: number | null
  email: string | null
  login: string | null
}

export interface userAuthValues {
  email: string
  password: string
  rememberMe: boolean
}