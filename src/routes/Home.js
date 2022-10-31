import { useState } from 'react';
import Dic from '../components/Home_Dic';
import Gram from '../components/Home_Gram';
import Mem from '../components/Home_Mem';
import Vid from '../components/Home_Vid';
import useInterval from '../hooks/useInterval';
import styles from './Home.module.css'

export default function Home({ userObj }) {
  const [buttonJump, setButtonJump] = useState(false)

  // Whenever scroll event happen, Change the value of scroll Y-coordinate
  const [scrollYValue, setScrollYValue] = useState(window.scrollY)
  window.addEventListener('scroll', () => {
    setScrollYValue(window.scrollY)
  })

  // CustomHook 'useInterval' (setinterval in JS)
  useInterval(() => { 
    setButtonJump(true)
    setTimeout(()=>{ setButtonJump(false) }, 180);
    setTimeout(()=>{ setButtonJump(true) }, 360);
    setTimeout(()=>{ setButtonJump(false) }, 540);
  }, 4000); // To make buttons jump every 4s

  return (
    <div id='homeContents'>
      <div id={styles.contents} className='flex flex-row'>
        <div className='font-mono text-lg '>
          <div className='font-serif text-6xl'>Hey {userObj.displayName} !</div>
          <div className='font-serif text-6xl'>ARE YOU READY TO ENJOY ENGLISH? </div>
          <div className={styles.extraMsg}>
            <p>This is MYabc website for you who need to learn English</p>
            <p>You can learn it in an effective and efficient way.</p>
            <p>Whoever need to use this</p>
            <p>Feel free to use!</p>
            <br />
            <br />
            <p>Website maker : John park</p>
          </div>
        </div>
        <img id={styles.abcLogo} alt="ABC_LOGO"
        src={'https://firebasestorage.googleapis.com/v0/b/myabc-97f03.appspot.com/o/ABC_LOGO.png?alt=media&token=1f2f04cd-b03e-450f-bcbe-538fced9302c'} />
      </div>
      <Mem scrollYValue={scrollYValue} buttonJump={buttonJump} />
      <Dic scrollYValue={scrollYValue} buttonJump={buttonJump}/>
      <Vid buttonJump={buttonJump}/>
      <Gram scrollYValue={scrollYValue} buttonJump={buttonJump}/>
    </div>
  );
}
