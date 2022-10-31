import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../routes/Home.module.css'

export default function Dic({ scrollYValue, buttonJump }) {
    // Carousel
    const images = useRef(
        [
            { src: "https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/dic1.png?alt=media&token=23860f2d-e82c-4614-996d-2fa2c5905266" },
            { src: "https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/dic2.png?alt=media&token=466a487f-fb45-4396-8bfb-55f8ce09434f" },
            { src: "https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/dic3.png?alt=media&token=6c5a98e8-fb47-4911-b6d0-2119f50a7ef4" }
        ]);
    const [current, setCurrent] = useState(0); // What number slide (default 0)
    const [marginL, setMarginL] = useState();

    useEffect(() => {
        setMarginL({ marginLeft: `-${current}00%` });
    }, [current]); // Whenever slide, push to leftside

    const imgSize = useRef(images.current.length); // Total number of slide
    const moveSlide = (i) => {
        let nextIndex = current + i; // 1 = Next, -1 = Previous
        if (nextIndex < 0) nextIndex = imgSize.current - 1;  // If the moved slide become smaller than first one, Go to last
        else if (nextIndex >= imgSize.current) nextIndex = 0; // If the moved slide become grearer than last one, Go to first
        setCurrent(nextIndex);
    };

    return <>
        <div className={styles.dictionaryContents}>
            <div>
                {/* Title Dictionary, Explanation */}
                <div className={scrollYValue >= 928 && scrollYValue <= 1802 ? styles.dictionaryDisplay : styles.dictionaryHidden}>
                    <div className={styles.titleAndBtn}>
                        <h1>Dictionary</h1>
                        <Link to='/dictionary'>
                            <button className={`${styles.create} bg-gradient-to-r from-zinc-50 via-zinc-600 
                            to-zinc-50 transition shadow-xl ease-in-out delay-70 bg-red-400 hover:-translate-y-2
                             duration-300 ${buttonJump && '-translate-y-3'}`}>
                                GO
                            </button>
                        </Link>
                    </div>
                    <h2>Search any words!</h2>
                    <h2>You can see its IPA, listen to the pronunciation,</h2>
                    <h2>and cheack all the meaning of the words.</h2>
                </div>
                {/* Projector Screen, Owl, BeamProjector Machine, FlashLight */}
                <img className={styles.screenImg} src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/projector.png?alt=media&token=b331e9d7-3daa-4f9d-9641-7ba2cd79e8ac" />
                <img className={styles.owlImg} src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/teacher.png.png?alt=media&token=b00930a4-d6f1-49eb-b715-d2ce91be9e80" />
                <img className={styles.beamProjectorImg} src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/beam.png?alt=media&token=2b9d122c-d846-45c2-9868-a9478d26c67d" />
                <img className={scrollYValue >= 1450 && scrollYValue <= 2090 ? (
                    styles.flashlightImgDisplay
                ) : (
                    styles.flashlightImgHidden)}
                    src="https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/flashlight.png?alt=media&token=8747aed4-a71a-4ec2-bd00-8205046e8d09" />

                {/* Carousel */}
                <div className={styles.slide}>
                    {/* Left button */}
                    <div className={`material-icons-outlined ${styles.slideBtn}`} onClick={() => { moveSlide(-1); }}>
                        arrow_back_ios
                    </div>
                    {/* Slide Images in Carousel */}
                    <div className={scrollYValue >= 1450 && scrollYValue <= 2090 ? styles.slideImgContainerDisplay : styles.slideImgContainerHidden}>
                        <div className={styles.flexbox_transition} style={marginL}>
                            {images.current.map((img, i) => (
                                <div
                                    key={i}
                                    className={styles.slideImg}
                                    style={{ backgroundImage: `url(${img.src})` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    {/* Right Button */}
                    <div className={`material-icons-outlined ${styles.slideBtn}`} onClick={() => { moveSlide(1); }}>
                        arrow_forward_ios
                    </div>
                    {/* 3 dots */}
                    <div className={styles.dotPosition}>
                        {images.current.map((x, i) => (
                            <div
                                key={i}
                                className={i === current ? styles.dot_current : styles.dot}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}
