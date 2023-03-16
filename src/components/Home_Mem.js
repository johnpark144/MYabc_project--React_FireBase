import { Link } from "react-router-dom";
import styles from "../routes/Home.module.css";

export default function Mem({ scrollYValue, buttonJump }) {
  return (
    <>
      <div className={styles.memorizeContents}>
        <div>
          {/* Title Memorize, Explanation */}
          <div
            className={
              scrollYValue >= 897 || scrollYValue < 220
                ? styles.memorizeHidden
                : styles.memorizeDisplay
            }
          >
            <div className={styles.titleAndBtn}>
              <h1>MEMORIZE </h1>
              <Link to="/memorize">
                <button
                  className={`${styles.create} bg-gradient-to-r from-teal-400
                            to-emerald-400 transition shadow-xl ease-in-out delay-70 
                            hover:-translate-y-2 duration-300 ${
                              buttonJump && "-translate-y-3"
                            }`}
                >
                  GO
                </button>
              </Link>
            </div>
            <h2>You can create days</h2>
            <h2>And create words to memorize.</h2>
            <h2>If you memorized, you can click 'Isdone'</h2>
            <h2>or delete it</h2>
          </div>
          {/* Video, Computer Image */}
          <video
            width="300px"
            loop={true}
            autoPlay={true}
            muted={true}
            className={styles.memorizeVid}
          >
            <source
              src="https://user-images.githubusercontent.com/106279616/217297804-d2f45a50-2820-469d-87ae-b52df07ebbaf.mp4"
              type="video/webm"
            />
          </video>
          <img
            alt="computer"
            className={styles.computerImg}
            src="https://user-images.githubusercontent.com/106279616/217298597-68295156-5beb-484a-912d-5c90432f32c9.png"
          />
        </div>
      </div>
    </>
  );
}
