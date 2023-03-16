import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../routes/Home.module.css";
import useInterval from "../hooks/useInterval";

export default function Vid({ buttonJump }) {
  const [videoPause, setVideoPause] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // CustomHook 'useInterval' (setinterval in JS)
  useInterval(
    () => {
      setProgressBarWidth(progressBarWidth + 0.0208333);
    },
    isRunning ? 10 : null
  ); // every 10ms

  // ProgressBar returns, When video finished
  if (progressBarWidth >= 100) {
    setProgressBarWidth(0);
  }

  // Video Play, Pause
  const playOrPause = () => {
    const vid = document.getElementById("video");
    if (videoPause) {
      vid.pause();
      setIsRunning(false);
      console.log(vid);
    } else {
      vid.play();
      setIsRunning(true);
      console.log(vid);
    }
    setVideoPause(!videoPause);
  };

  return (
    <>
      <div className={styles.videoContents}>
        <div>
          {/* Title Video, Explanation */}
          <div className={videoPause ? styles.videoNone : styles.videoDisplay}>
            <div className={styles.titleAndBtn}>
              <h1>VIDEO</h1>
              <Link to="/video">
                <button
                  className={`${styles.create} bg-gradient-to-r from-sky-500
                            to-cyan-400 transition shadow-xl ease-in-out delay-70
                            hover:-translate-y-2 duration-300 ${
                              buttonJump && !videoPause && "-translate-y-3"
                            }`}
                >
                  GO
                </button>
              </Link>
            </div>
            <h2>Search any words to see</h2>
            <h2>how often they were used in Youtube,</h2>
            <h2>and in what context they were used,</h2>
            <h2>and create some words you will memorize</h2>
          </div>

          {/* Video, Play or Pause Image at the center */}
          <div className={styles.videoAndButton} onClick={playOrPause}>
            <video
              id="video"
              className={styles.videoVid}
              style={
                !videoPause ? { filter: " blur(20px)" } : { filter: " blur(0)" }
              }
              loop={true}
              autoPlay={false}
              muted={true}
            >
              <source
                src="https://user-images.githubusercontent.com/106279616/217296607-79dcf640-b492-4cbb-805c-7515ceba2de0.mp4"
                type="video/webm"
              />
            </video>
            <img
              alt="playOrPause"
              className={styles.button}
              src={
                videoPause
                  ? "https://user-images.githubusercontent.com/106279616/217377373-413b84de-7ac6-45c1-acf1-e7ebe63ece0d.png"
                  : "https://user-images.githubusercontent.com/106279616/217377313-28b018f6-69aa-4977-afdb-d4f6eb10b300.png"
              }
            />
          </div>
          {/* Video controller */}
          <div className={styles.controler}>
            <span
              className={`${styles.icon} material-icons-outlined`}
              onClick={playOrPause}
            >
              {videoPause ? "pause" : "play"}_circle
            </span>
            <div
              className={`${styles.progressBarContainer} bg-white rounded-lg shadow block p-4 m-auto`}
            >
              <div className="h-5 bg-gray-400 rounded-full mt-3">
                <div
                  style={{
                    width: `${progressBarWidth}%`,
                    transition: "width 5ms 1ms ease-in-out ",
                  }}
                  className="w-1/4 h-full text-center text-xs text-white bg-green-500 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
