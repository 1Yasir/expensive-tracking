import Link from 'next/link';
import styles from './LoginForm.module.css';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Login Form</h2>
        <form>
          <div className={styles.inputGroup}>
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Email"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
          </div>
     
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <p className={styles.footerText}>
          Not a member? <Link href="/">Signup now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
