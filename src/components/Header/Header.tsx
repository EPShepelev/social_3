import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo"
import { Login } from "../Login/Login"
import { Link } from 'react-router-dom';

export const Header: React.FC<{}> = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.nav}>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
      </div>
      <Login />
    </div>
  )
};