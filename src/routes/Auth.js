import { useState } from "react";
import { authService } from "../fBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import styles from "./Auth.module.css";

export default function Auth() {
  const [email, setEmail] = useState(""); // Realtime email input
  const [password, setPassword] = useState(""); // Realtime password input
  const [error, setError] = useState("");

  // Login mode or Create-account mode
  const [newAccount, setNewAccount] = useState(false);
  const toggleAccount = () => setNewAccount((prev) => !prev);

  // onChange event When Email or Password is typed
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // onSubmit to create account or to log in
  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    try {
      if (newAccount) {
        // Create-account mode
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        // Login mode
        data = await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Login with Google, gitHub, FaceBook
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    try {
      if (name === "google") {
        provider = new GoogleAuthProvider();
      } else if (name === "github") {
        provider = new GithubAuthProvider();
      } else if (name === "facebook") {
        provider = new FacebookAuthProvider();
      }
      const data = await signInWithPopup(authService, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div id={styles.authContainer} className="shadow-xl" onSubmit={onSubmit}>
        {/* MYabc Logo and letter */}
        <div className={styles.myabcContainer}>
          <img
            width="60px"
            alt="ABC_LOGO"
            src={
              "https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png"
            }
          />
          <span className={styles.myabc}>MYabc</span>
        </div>
        {/* Email, Password, Signin(Login) button, toggle button */}
        <form className={styles.loginSignup}>
          <input
            className={styles.emailPassword}
            onChange={onChange}
            required
            value={email}
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.emailPassword}
            onChange={onChange}
            required
            value={password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <input
            id={styles.submitBtn}
            className="shadow-md"
            type="submit"
            value={newAccount ? "Create Account" : "Sign in"}
          />
          <span id={styles.error}>{error.slice(10, -1)}</span>
        </form>
        <div
          id={styles.toggleAccount}
          className="shadow-md"
          onClick={toggleAccount}
        >
          {newAccount ? "Sign in" : "Create Account"}
        </div>
        {/* Hr tag and Or */}
        <div id={styles.hr_or_hr}>
          <hr style={{ width: "168px" }} />
          <span id={styles.or}>or</span>
          <hr style={{ width: "168px" }} />
        </div>
        {/* Google, gitHub, FaceBook */}
        <div>
          <div className={styles.snsAuth}>
            <button
              onClick={onSocialClick}
              name="google"
              id={styles.googleAuthBtn}
              className="shadow-md"
            >
              <i className="fa fa-google" style={{ marginRight: "10px" }} />
              Continue with Google
            </button>
            <button
              onClick={onSocialClick}
              name="github"
              id={styles.githubAuthBtn}
              className="shadow-md"
            >
              <i className="fa fa-github" style={{ marginRight: "10px" }} />
              Continue with Github
            </button>
            <button
              onClick={onSocialClick}
              name="facebook"
              id={styles.facebookAuthBtn}
              className="shadow-md"
            >
              <i
                className="fa fa-facebook-official"
                style={{ marginRight: "10px" }}
              />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
