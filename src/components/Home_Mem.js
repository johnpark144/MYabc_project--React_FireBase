import { Link } from 'react-router-dom'
import styles from '../routes/Home.module.css'

export default function Mem({ scrollYValue, buttonJump }) {
    return <>
        <div className={styles.memorizeContents}>
            <div>
                {/* Title Memorize, Explanation */}
                <div className={scrollYValue >= 897 || scrollYValue < 220 ? styles.memorizeHidden : styles.memorizeDisplay}>
                    <div className={styles.titleAndBtn}>
                        <h1>MEMORIZE </h1>
                        <Link to='/memorize'>
                            <button className={`${styles.create} bg-gradient-to-r from-teal-400
                            to-emerald-400 transition shadow-xl ease-in-out delay-70 
                            bg-red-400 hover:-translate-y-2 duration-300 ${buttonJump && '-translate-y-3'}`}>
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
                <video width="300px" loop={true} autoPlay={true} muted={true} className={styles.memorizeVid}>
                    <source src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/memorize.mp4?alt=media&token=3535d74f-6e7a-45e1-9906-427843894528"
                        type="video/webm" />
                </video>
                <img className={styles.computerImg}
                    src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/computer.png?alt=media&token=c2ad8cdf-4aaf-43ab-9946-6aabf9476736" />
            </div>
        </div>
    </>
}