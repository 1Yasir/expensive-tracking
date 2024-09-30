import styles from './SignUpForm.module.css';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2 className={styles.heading}>Signup Form</h2>
        <form>
          <div className={styles.inputGroup}>
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <i className="fas fa-envelope"></i>
            <input
              type="email"
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
          <button type="submit" className={styles.signupButton}>
            Signup
          </button>
        </form>
        <p className={styles.footerText}>
          Already have an account? <Link href="/login">Login now</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
