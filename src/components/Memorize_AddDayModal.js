import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../fBase";
import styles from '../routes/Memorize.module.css'

export default function AddDayModal({ userObj, setAddDayMode, days }) {
    const cancel = () => {
        setAddDayMode(false)
    }
    // Add a Day
    const confirm = async (e) => {
        e.preventDefault();
        const dayObj = {
            creatorId: userObj.uid, // Save logged-in-user's uid
            day: days.length + 1
        }
        setAddDayMode(false)
        await addDoc(collection(dbService, "days"), dayObj); // Add document in days collection at dbService(Firestore)
    }

    return <>
        <div className={styles.modal}>
            <div id={styles.modalContents}
                className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                <div className="w-full h-full text-center">
                    <div className="flex h-full flex-col justify-between">
                        {/* Icon, Message */}
                        <span id={styles.icon} className="material-icons">
                            edit_calendar
                        </span>
                        <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                            Create a day
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-m py-2 px-6">
                            You want to create a day?
                        </p>
                        {/* Buttons */}
                        <div className="flex items-center justify-between gap-4 h-4 w-full mt-8">
                            <button onClick={confirm} type="button"
                                className="py-2 px-4 bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 
                            focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 
                            text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                            focus:ring-offset-2 rounded-lg ">
                                Confirm
                            </button>
                            <button onClick={cancel} type="button"
                                className="py-2 px-4 bg-white hover:bg-gray-200 focus:ring-indigo-500 
                            focus:ring-offset-indigo-200 text-indigo-500 text-gray w-full transition 
                            ease-in duration-200 text-center text-base font-semibold shadow-md 
                            focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
