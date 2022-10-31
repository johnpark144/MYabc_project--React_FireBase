import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Memorize.module.css'
import AddDayModal from "../components/Memorize_AddDayModal";
import DeleteDayModal from "../components/Memorize_DeleteDayModal";
import LoadingBox from "../components/Memorize_LoadingBox";
import useCallData from "../hooks/useCallData";

export default function Memorize({ userObj, btnClass }) {
    const [days, setDays] = useState(false);
    const [addDayMode, setAddDayMode] = useState(false);
    const [deleteDayMode, setDeleteDayMode] = useState(false);

    // Show AddDayModal
    const addDay = () => {
        setAddDayMode(true);
    }

    // Show DeleteDayModal
    const delDay = () => {
        setDeleteDayMode(true);
    }

    // CustomHook 'useCallData'
    let dayArr = useCallData("days", "day") // To find how many days the user has to output
    useEffect(() => {
        if(dayArr){
        setDays(dayArr.filter(day => (day.creatorId === userObj.uid)));
        }
    }, [dayArr])

    // Loading
    if (days === false || days.length === 0) {
        return <LoadingBox />
    }

    return (
        <div id='contents'>
            <div id={styles.addBtn}>
                {/* Add Day Button */}
                <button onClick={addDay} id={styles.create} className={btnClass}>
                    Add Day
                </button>
                {/* AddDayModal */}
                {addDayMode && <AddDayModal userObj={userObj} setAddDayMode={setAddDayMode} days={days} />}
                {/* Delete Day Button */}
                <button onClick={delDay} id={styles.create} className={btnClass}>
                    Delete Day
                </button>
                {/* DeleteDayModal  */}
                {deleteDayMode && <DeleteDayModal userObj={userObj} setDeleteDayMode={setDeleteDayMode} days={days} />}
                {/* Create Word Button */}
                <Link to={"/memorize/create"}>
                    <button id={styles.create} className={btnClass}>
                        Create word
                    </button>
                </Link>
            </div>
            {/* Day buttons */}
            <div className="grid grid-cols-4">
                {days.map(day => (
                    <Link to={`/memorize/${day.day}`} id={styles.day} key={day.day}
                        className='rounded-lg transition shadow-blue-500/50 shadow-md ease-in-out delay-50 
                        bg-blue-500 hover:-translate-y-1 hover:bg-blue-300 duration-300'>
                        <div key={day.day}>
                            Day {day.day}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
