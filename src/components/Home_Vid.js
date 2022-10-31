import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../routes/Home.module.css'
import useInterval from '../hooks/useInterval'

export default function Vid({ buttonJump }) {
    const [videoPause, setVideoPause] = useState(false)
    const [progressBarWidth, setProgressBarWidth] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    // CustomHook 'useInterval' (setinterval in JS)
    useInterval(() => {
        setProgressBarWidth(progressBarWidth + 0.0208333);
    }, isRunning ? 10 : null); // every 10ms

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
        } else {
            vid.play();
            setIsRunning(true);
        }
        setVideoPause(!videoPause)
    }

    return <>
        <div className={styles.videoContents}>
            <div>
                {/* Title Video, Explanation */}
                <div className={videoPause ? styles.videoNone : styles.videoDisplay}>
                    <div className={styles.titleAndBtn}>
                        <h1>Video</h1>
                        <Link to='/video'>
                            <button className={`${styles.create} bg-gradient-to-r from-sky-500
                            to-cyan-400 transition shadow-xl ease-in-out delay-70
                            bg-red-400 hover:-translate-y-2 duration-300 ${buttonJump && !videoPause && '-translate-y-3'}`}>
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
                <div className={styles.videoAndButton} onClick={playOrPause} >
                    <video id="video" className={styles.videoVid} style={!videoPause ? { 'filter': ' blur(20px)' } : { 'filter': ' blur(0)' }}
                        loop={true} autoPlay={false} muted={true} >
                        <source src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/video.mp4?alt=media&token=bc710b0f-732b-4711-aaaf-dbd4f51ae6b0"
                            type="video/webm" />
                    </video>
                    <img className={styles.button}
                        src={videoPause ? (
                            "https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/pause.png?alt=media&token=ed977209-a562-48c0-a805-2157c4edb06e"
                        ) : (
                            "https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/play.png?alt=media&token=d1b17089-28f6-48eb-8b32-5b3dac766793"
                        )} />
                </div>
                {/* Video controller */}
                <div className={styles.controler}>
                    <span className={`${styles.icon} material-icons-outlined`} onClick={playOrPause}>
                        {videoPause ? 'pause' : 'play'}_circle
                    </span>
                    <div className={`${styles.progressBarContainer} bg-white rounded-lg shadow block p-4 m-auto`}>
                        <div className="h-5 bg-gray-400 rounded-full mt-3">
                            <div style={{ width: `${progressBarWidth}%`, transition: "width 5ms 1ms ease-in-out " }}
                                className="w-1/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}