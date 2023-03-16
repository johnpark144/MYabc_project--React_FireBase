import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../routes/Home.module.css";

export default function Dic({ scrollYValue, buttonJump }) {
  // Carousel
  const images = useRef([
    {
      src: "https://user-images.githubusercontent.com/106279616/217298513-e53cb9ea-86e4-4fe2-a51e-12ca0dd98444.png",
    },
    {
      src: "https://user-images.githubusercontent.com/106279616/217298427-bad92ba7-f8f0-442a-8b7d-e2c3a38dbc6d.png",
    },
    {
      src: "https://user-images.githubusercontent.com/106279616/217298268-3a197470-0432-4dca-9010-be8b3e05f485.png",
    },
  ]);
  const [current, setCurrent] = useState(0); // What number slide (default 0)
  const [marginL, setMarginL] = useState();

  useEffect(() => {
    setMarginL({ marginLeft: `-${current}00%` });
  }, [current]); // Whenever slide, push to leftside

  const imgSize = useRef(images.current.length); // Total number of slide
  const moveSlide = (i) => {
    let nextIndex = current + i; // 1 = Next, -1 = Previous
    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    // If the moved slide become smaller than first one, Go to last
    else if (nextIndex >= imgSize.current) nextIndex = 0; // If the moved slide become grearer than last one, Go to first
    setCurrent(nextIndex);
  };

  return (
    <>
      <div className={styles.dictionaryContents}>
        <div>
          {/* Title Dictionary, Explanation */}
          <div
            className={
              scrollYValue >= 928 && scrollYValue <= 1802
                ? styles.dictionaryDisplay
                : styles.dictionaryHidden
            }
          >
            <div className={styles.titleAndBtn}>
              <h1>DICTIONARY</h1>
              <Link to="/dictionary">
                <button
                  className={`${
                    styles.create
                  } bg-gradient-to-r from-zinc-50 via-zinc-600 
                            to-zinc-50 transition shadow-xl ease-in-out delay-70 bg-red-400 hover:-translate-y-2
                             duration-300 ${buttonJump && "-translate-y-3"}`}
                >
                  GO
                </button>
              </Link>
            </div>
            <h2>Search any words!</h2>
            <h2>You can see its IPA, listen to the pronunciation,</h2>
            <h2>and check all the meaning of the words.</h2>
          </div>
          {/* Projector Screen, Owl, BeamProjector Machine, FlashLight */}
          <img
            alt="Projector Screen"
            className={styles.screenImg}
            src="https://user-images.githubusercontent.com/106279616/217297409-91e2b44e-61c3-459c-81ee-58e8a19f08a4.png"
          />
          <img
            alt="Owl"
            className={styles.owlImg}
            src="https://user-images.githubusercontent.com/106279616/217297151-fa07635c-dd00-4607-99ff-2763aefdf6cc.png"
          />
          <img
            alt="Beam Projector Machine"
            className={styles.beamProjectorImg}
            src="https://user-images.githubusercontent.com/106279616/217298683-1f063b29-c15b-486a-8870-3420209ff79f.png"
          />
          <img
            alt="FlashLight"
            className={
              scrollYValue >= 1450 && scrollYValue <= 2090
                ? styles.flashlightImgDisplay
                : styles.flashlightImgHidden
            }
            src="https://user-images.githubusercontent.com/106279616/217298073-8b2f6cbc-1a40-48ea-b5ba-47ac3f8c36de.png"
          />

          {/* Carousel */}
          <div className={styles.slide}>
            {/* Left button */}
            <div
              className={`material-icons-outlined ${styles.slideBtn}`}
              onClick={() => {
                moveSlide(-1);
              }}
            >
              arrow_back_ios
            </div>
            {/* Slide Images in Carousel */}
            <div
              className={
                scrollYValue >= 1450 && scrollYValue <= 2090
                  ? styles.slideImgContainerDisplay
                  : styles.slideImgContainerHidden
              }
            >
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
            <div
              className={`material-icons-outlined ${styles.slideBtn}`}
              onClick={() => {
                moveSlide(1);
              }}
            >
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
  );
}
