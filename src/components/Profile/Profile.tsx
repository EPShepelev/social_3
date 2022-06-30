import { useAppSelector } from "../../hooks/redux";

export const Profile: React.FC<{}> = () => {
  let { userId } = useAppSelector(store => store.auth.user)

  return (<div>User number {userId} </div>)
};