import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Day.module.css";
import Word from "../components/Day_Word";
import LoadingTd from "../components/Day_LoadingTd";
import useCallData from "../hooks/useCallData";

export default function Day({ userObj, btnClass }) {
  const { day } = useParams(); // UseParams brings values in Url in the form of object ({day:1})
  const [words, setWords] = useState("");
  const [days, setDays] = useState("");

  // CustomHook 'useCallData' (to bring datas from firebase)
  let wordArr = useCallData("words", "id"); // 1. To find only words that the user has
  let dayArr = useCallData("days", "day"); // 2. To find how many days the user has to control 'next-arrow' of day

  useEffect(() => {
    if (wordArr && dayArr) {
      // 1.
      setWords(
        wordArr.filter(
          (word) => word.creatorId === userObj.uid && word.day === Number(day)
        )
      ); // Set words within same day
      // 2.
      setDays(dayArr.filter((day) => day.creatorId === userObj.uid));
    }
  }, [wordArr, dayArr, day]);

  // To hide the words you memorized
  const [togleKor, setTogleKor] = useState(true);
  const [togleEng, setTogleEng] = useState(true);
  function togleHideKor() {
    setTogleKor(!togleKor);
  }
  function togleHideEng() {
    setTogleEng(!togleEng);
  }

  return (
    <div id="contents">
      <div
        id={styles.menus}
        className="flex justify-between items-center sm:justify-evenly"
      >
        {/* Back, hideEng, HideKor button */}
        <div className="flex h-14">
          <Link to={"/memorize"}>
            <span
              id={styles.back}
              className="material-icons-outlined transition hover:-translate-y-1 duration-300'"
            >
              arrow_back_ios
            </span>
          </Link>
          <button
            onClick={togleHideEng}
            id={styles.hide}
            className="transition shadow-purple-500/50 shadow-md ease-in-out delay-50 bg-purple-300
                    hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-300"
          >
            {togleEng ? <>Hide Eng</> : <>Show Eng</>}
          </button>
          <button
            onClick={togleHideKor}
            id={styles.hide}
            className="transition shadow-blue-500/50 shadow-md ease-in-out delay-50 bg-blue-300
                    hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-300"
          >
            {togleKor ? <>Hide Kor</> : <>Show Kor</>}
          </button>
        </div>
        {/* Previous arrow, Day, Next arrow */}
        <div id={styles.prev_next}>
          <span>
            {Number(day) - 1 > 0 ? (
              <Link to={`/memorize/${Number(day) - 1}`}>
                <span className="material-icons-outlined">arrow_back</span>
              </Link>
            ) : (
              <span />
            )}
          </span>
          <span id={styles.day}>Day {day}</span>
          <span>
            {Number(day) < days.length ? (
              <Link to={`/memorize/${Number(day) + 1}`}>
                <span className="material-icons-outlined">arrow_forward</span>
              </Link>
            ) : (
              <span />
            )}
          </span>
        </div>
        {/* Create word button */}
        <div className="h-14">
          <Link to={"/memorize/create"}>
            <button id={styles.create} className={btnClass}>
              Create word
            </button>
          </Link>
        </div>
      </div>
      {/* Table */}
      <div className="w-full flex justify-center">
        <table id={styles.table}>
          <thead>
            <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-1 text-center">Isdone</th>
              <th className="py-3 px-11 text-center">Eng</th>
              <th className="py-3 px-11 text-center">Kor</th>
              <th className="py-3 px-1 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(words) ? (
              words.map((word) => (
                <Word
                  word={word}
                  key={word.id}
                  togleKor={togleKor}
                  togleEng={togleEng}
                  userObj={userObj}
                />
              ))
            ) : (
              <tr className="bg-gray-200 text-gray-600">
                <LoadingTd />
                <LoadingTd />
                <LoadingTd />
                <LoadingTd />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
