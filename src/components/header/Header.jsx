import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          Awesome<span>logo</span>
        </h1>
        <div className={styles.navMenu}>
          <ul>
            <li>
              <Link to="/">HookForm</Link>
            </li>
            <li>
              <Link to="/formaccount">Account</Link>
            </li>
            <li>
              <Link to="/formregister">Registration</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
