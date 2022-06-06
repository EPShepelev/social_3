import { useLocation, Navigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/redux";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let { isAuth } = useAppSelector(store => store.auth)

  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  } else {
    return children;
  }
}