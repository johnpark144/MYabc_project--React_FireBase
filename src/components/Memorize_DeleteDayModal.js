import { useEffect, useState } from 'react';
import { collection, query, doc, where, getDocs, deleteDoc } from "firebase/firestore";
import { dbService } from "../fBase";
import styles from '../routes/Memorize.module.css'

export default function DeleteDayModal({ userObj, setDeleteDayMode }) {
    const [delDayRef, setDelDayRef] = useState('')
    const [lastDay, setLastDay] = useState('')

    // Look for the document that 'userObj.uid' has for update and delete
    useEffect(() => {
        async function DelDayRef_creator() {
            // Look for the day the user has as last
            const q_LastDay = query(collection(dbService, "days"), where("creatorId", "==", userObj.uid));
            const docsSnap_LastDay = await getDocs(q_LastDay);
            const lastDay = docsSnap_LastDay.docs.length
            setLastDay(lastDay)

            // Look for the document of the lastday-Id the user has
            const q = query(collection(dbService, "days"), where("creatorId", "==", userObj.uid), where("day", "==", lastDay));
            const docsSnap = await getDocs(q);
            const docsId = docsSnap.docs[0].id
            setDelDayRef(doc(dbService, "days", docsId))  // Document with the Id in days collection
        }
        DelDayRef_creator();
    }, [])

    const cancel = () => {
        setDeleteDayMode(false)
    }

    // Delete a day
    const _delete = async (e) => {
        e.preventDefault();
        setDeleteDayMode(false)
        await deleteDoc(delDayRef); // Delete the last day
    }
    
    return <>
        <div className={styles.modal}>
            <div id={styles.modalContents}
                className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                <div className="w-full h-full text-center">
                    <div className="flex h-full flex-col justify-between">
                        {/* Icon, Message */}
                        <span id={styles.icon} className="material-icons">
                            event_busy
                        </span>
                        <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                            Delete a day
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-m py-2 px-6">
                            Are you sure you want to delete "Day {lastDay}"?
                        </p>
                        {/* Buttons */}
                        <div className="flex items-center justify-between gap-4 w-full h-1 mt-8">
                            <button onClick={_delete} type="button"
                                className="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 
                            focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 
                            text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                            focus:ring-offset-2 rounded-lg ">
                                Delete
                            </button>
                            <button onClick={cancel} type="button"
                                className="py-2 px-4 bg-white hover:bg-gray-200 focus:ring-indigo-500 
                            focus:ring-offset-indigo-200 text-indigo-500 text-gray w-full transition 
                            ease-in duration-200 text-center text-base font-semibold shadow-md 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
