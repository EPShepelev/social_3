import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  // let { user } = //from redux
  let user = false
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}