import styles from "./Login.module.scss";
import Logo from "../../../image/logo-e.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div style={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <h2>Dashboard Kit</h2>

        <div className={styles.desc}>
          <p className={styles.title}>Log In to Dashboard Kit</p>

          <p className={styles.description}>
            Enter your email and password below
          </p>
        </div>
        <div className={styles.email}>
          <h4>Email</h4>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className={styles.password}>
          <div className={styles.forgotPassword}>
            <h4>Password</h4>
            <p>Forgot Password?</p>
          </div>
          <input type="password" placeholder="Password" />
        </div>
        <button>Log In</button>
        <p>
          Don't have an account? <span className={styles.signUp}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
