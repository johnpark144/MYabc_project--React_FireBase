import { useEffect, useState } from "react";
import { collection, query, updateDoc, doc, where, getDocs } from "firebase/firestore";
import { dbService } from "../fBase";
import DeleteWordModal from "./Day_DeleteWordModal";
import styles from '../routes/Day.module.css'

export default function Word({ word, togleKor, togleEng }) {
    const [isDone, setIsDone] = useState(word.isDone);
    const [isdoneRef, setIsDoneRef] = useState('');

    // Look for the document that 'word.id' has for update and delete
    useEffect(() => {
        async function isdoneRef_creator() {
            const q = query(collection(dbService, "words"), where("id", "==", word.id));
            const docsSnap = await getDocs(q);
            const docsId = docsSnap.docs[0].id
            setIsDoneRef(doc(dbService, "words", docsId)); // document with the Id that in words collection
        }
        isdoneRef_creator(); // Made a function seperately to put async, await
    }, [])

    // Whenever onChange of IsDone-Checkbox happen, update the 'isDone'
    const togleIsdone = async (e) => {
        e.preventDefault();

        setIsDone(!isDone); // Output Checkbox in display
        await updateDoc(isdoneRef, { // Update of DB
            isDone: !isDone,
        });
    }

    // Delete
    const [wordExist, setWordExist] = useState(word); // When Word exist, Output it. (To delete word right away)
    const [deleteMode, setDeleteMode] = useState(false);
    const delword = () => {
        setDeleteMode(true)
    }

    return (<>
        {(wordExist) && <>
            <tr className={!isDone ? "bg-gray-200 text-gray-600" : styles.rowDone}>
                {/* Isdone */}
                <td className="py-3 px-1 text-left whitespace-nowrap">
                    <div className="flex items-center justify-center">
                        <div className="mr-2">
                            <input type="checkbox" className="accent-pink-500" onChange={togleIsdone} checked={isDone} />
                        </div>
                    </div>
                </td>
                {/* Eng */}
                <td className="py-3 px-11 text-left">
                    <div className="flex items-center justify-center">
                        {togleEng ? word.eng : !isDone ? "______" : word.eng}
                    </div>
                </td>
                {/* Kor */}
                <td className="py-3 px-11 text-center">
                    <div className="flex items-center justify-center">
                        {togleKor ? word.kor : !isDone ? "______" : word.kor}
                    </div>
                </td>
                {/* Delete */}
                <td className="py-3 px-1 text-center">
                    <button onClick={delword} id={styles.del}
                        className={!isDone ? `rounded-lg transition shadow-red-500/50 shadow-md 
                    ease-in-out delay-50 bg-red-400 hover:-translate-y-1 hover:bg-red-300 duration-300` : ''}>
                        x
                    </button>
                    {/* DeleteWordModal */}
                    {deleteMode && <DeleteWordModal word={word} setDeleteMode={setDeleteMode}
                        isdoneRef={isdoneRef} setWordExist={setWordExist} />}
                </td>
            </tr>
        </>
        }
    </>)
}
