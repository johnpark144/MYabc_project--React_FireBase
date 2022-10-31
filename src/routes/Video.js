import { useEffect, useState } from "react";
import styles from './Video.module.css'
import Create from '../routes/Create';

export default function Video({ userObj, btnClass }) {
    const [showCreate, setShowCreate] = useState(false); // Weather or not use of creating word together

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://youglish.com/public/emb/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    function seeCreate() {
        setShowCreate(!showCreate)
    }

    return (
        <div id="contents">
            <div id={styles.contents}>
                <button onClick={seeCreate} id={styles.seeCreateBtn} className={btnClass}>
                    {showCreate ? 'Close' : 'See'} Create
                </button>

                <div id={styles.vidCreate}>
                    <div id={showCreate ? styles.video : styles.video2}>
                        <a id="yg-widget-0" className="youglish-widget" data-query="hello"
                            data-lang="english" data-zones="all,us,uk,aus" data-components="8415"
                            data-bkg-color="theme_light" rel="nofollow" href="https://youglish.com">
                            Visit YouGlish.com</a>
                    </div>
                    {showCreate ? (
                        <div id={styles.create}>
                            <Create userObj={userObj} showCreate={showCreate} />
                        </div>
                    ) : ('')}
                </div>
            </div>
        </div>
    )
}
