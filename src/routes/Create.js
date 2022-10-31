import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../fBase";
import styles from './Create.module.css'
import useCallData from '../hooks/useCallData';

export default function Create({ userObj, showCreate }) {
    const [days, setDays] = useState(''); // How many days the user has
    const [isLoading, setIsLoading] = useState(false);
    const [wordsMaxId, setWordsMaxId] = useState('');

    const navigate = useNavigate();
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    // CustomHook 'useCallData' (to bring datas from firebase)
    let dayArr = useCallData("days", "day") // 1. To find how many days the user has to save words
    let wordsIdArr = useCallData("words", "id") // 2. To find greatest Id number
    useEffect(() => {
        if(dayArr && wordsIdArr){
        // 1.
        setDays(dayArr.filter(day => (day.creatorId === userObj.uid)))
        // 2.
        wordsIdArr = wordsIdArr.map((doc) => {
            return Number(doc.id)
        })
        setWordsMaxId(Math.max(...wordsIdArr));
    }
    }, [dayArr, wordsIdArr])


    // onSubmit to create words
    const onSubmit = async (e) => {
        e.preventDefault();
        // It works only when selected Day in options and values in Korean, English exist
        if (dayRef.current.value !== 'Day' && engRef.current.value && korRef.current.value) {
            if (!isLoading) { // Only when is not loading
                setIsLoading(true); // Loading (To prevent from multiple submit)
                // Add words in DB
                const wordObj = {
                    creatorId: userObj.uid, // Save logged-in-user's uid
                    id: wordsMaxId + 1,
                    day: Number(dayRef.current.value),
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }
                await addDoc(collection(dbService, "words"), wordObj); // Add document in words collection at dbService(Firestore)

                // Case of saving from 'Video'
                if (showCreate) {
                    alert('the word saved')
                }
                // Case of saving from 'Memorize'
                else {
                    navigate(`/memorize/${dayRef.current.value}`)
                }
                setIsLoading(false); // Not loading
            }
        }
        else {
            alert('please check the forms')
            return
        }
    }

    return (
        <div id='contents' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div id={styles.allForm} className="shadow-lg bg-white w-64 m-auto" style={showCreate && { marginLeft: "60%" }}>
                <form onSubmit={onSubmit}>
                    {/* Day */}
                    <p className={styles.form}>
                        <span>
                            Day :
                        </span>
                        <select ref={dayRef}>
                            <option>
                                Day
                            </option>
                            {days && days.map(day => (
                                <option key={day.day} value={day.day}>
                                    {day.day}
                                </option>
                            ))}
                        </select>
                    </p>
                    {/* Korean */}
                    <p className={styles.form}>
                        <span>
                            Korean :
                        </span>
                        <input type='text' name="kor" ref={korRef} placeholder="ex)사과"
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 
                        w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
                        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </p>
                    {/* English */}
                    <p className={styles.form}>
                        <span>
                            English :
                        </span>
                        <input type='text' name="eng" ref={engRef} placeholder="ex)Apple"
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 
                        w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
                        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </p>
                    {/* Buttons */}
                    <p className={styles.form}>
                        <span className="flex items-center justify-between gap-4 w-full mt-8">
                            {isLoading ? (
                                <button type="button" className="py-2 px-4 flex justify-center items-center
                                bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 
                                text-white w-full transition ease-in duration-200 text-center text-base font-semibold 
                                shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                        </path>
                                    </svg>
                                    saving
                                </button>
                            ) : (
                                <button type="submit" className="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Create
                                </button>
                            )}
                            {showCreate ? "" : (
                                <Link to={"/memorize"}>
                                    <button type="button" className="py-2 px-4 bg-white hover:bg-gray-200 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-gray w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Back
                                    </button>
                                </Link>
                            )}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}
