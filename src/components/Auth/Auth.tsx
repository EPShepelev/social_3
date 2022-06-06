import { Navigate } from "react-router-dom"
import { AuthForm } from "../AuthForm/AuthForm"
import { useAppSelector } from "../../hooks/redux";

export const Auth: React.FC<{}> = () => {
  let { isAuth } = useAppSelector(store => store.auth)

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return <AuthForm />
};

