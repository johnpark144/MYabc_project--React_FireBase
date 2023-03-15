import { Link } from "react-router-dom";
import styles from "../routes/Home.module.css";

export default function Gram({ scrollYValue, buttonJump }) {
  return (
    <>
      <div className={styles.grammarlyContents}>
        <div>
          {/* 1st Box : Title Grammarly, Explanation */}
          <div
            className={
              scrollYValue > 2900
                ? styles.grammarlyDisplay1
                : styles.grammarlyHidden1
            }
          >
            <div className={styles.titleAndBtn}>
              <h1>Grammarly</h1>
              <Link to="/grammarlyapp">
                <button
                  className={`${styles.create} bg-gradient-to-r from-green-800 
                            to-green-700 transition shadow-xl ease-in-out delay-70 bg-red-400
                             hover:-translate-y-2 duration-300 ${
                               buttonJump && "-translate-y-3"
                             }`}
                >
                  GO
                </button>
              </Link>
            </div>
            <h2>Check your grammar</h2>
            <h2>by writing down some sentence!</h2>
          </div>
          {/* 2nd Box : Explanation */}
          <div
            className={
              scrollYValue > 2900
                ? styles.grammarlyDisplay2
                : styles.grammarlyHidden2
            }
          >
            <h2>This will let you know</h2>
            <h2>what is wrong and proper words</h2>
          </div>
          {/* 3rd Box : Image */}
          <div
            className={
              scrollYValue > 2900
                ? styles.grammarlyDisplay3
                : styles.grammarlyHidden3
            }
          >
            <img
              alt="grammer_Ex"
              style={{ width: "320px", height: "195px", borderRadius: "10px" }}
              src="https://user-images.githubusercontent.com/106279616/217297935-5429f47a-cb82-4676-b6d0-99f9e7240a5f.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
