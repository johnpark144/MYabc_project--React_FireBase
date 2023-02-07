import { useState } from "react";
import styles from "./Dictionary.module.css";

export default function Dictionary({ btnClass }) {
  const [word, setWord] = useState(null); // the Word you want to search in textinput
  const [wordInfo, setWordInfo] = useState(false); // the information about the word from Dictionary API

  function onChange(e) {
    setWord(e.target.value);
  }

  function search() {
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWordInfo(data[0]);
        });
    } else {
      setWordInfo(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  function Audio() {
    return (
      <audio controls>
        <source src={wordInfo.phonetics[0].audio} type="audio/mpeg" />
      </audio>
    );
  }

  return (
    <div id="contents">
      {/* Textinput and Search button */}
      <div id={styles.search}>
        <input
          onChange={onChange}
          onKeyDown={onKeyDown}
          id={styles.searchBar}
          className="shadow-md shadow-purple-100/50"
          type="text"
        />
        <button onClick={search} id={styles.searchBtn} className={btnClass}>
          <span id={styles.searchIcon} className="material-icons-outlined">
            search
          </span>
        </button>
      </div>
      {/* Dictionay section */}
      <div className="flex flex-col items-center">
        {wordInfo ? (
          <>
            {/* IPA and audiofile */}
            <div id={styles.wordAudio}>
              <div>
                {wordInfo.word} {wordInfo.phonetic}
              </div>
              <Audio />
            </div>
            {/* Deffinitions */}
            <div id={styles.container}>
              {wordInfo.meanings.map((meaning, idx) => (
                <div
                  key={idx}
                  id={styles.vocaContainer}
                  className="drop-shadow-lg font-serif bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50"
                >
                  <span className="material-icons-round">menu_book</span>
                  <span> &nbsp;{meaning.partOfSpeech}</span>
                  <div>
                    - synonym :
                    {meaning.synonyms[0] &&
                      meaning.synonyms.map((synonym, idx) => (
                        <span key={idx}>{synonym},</span>
                      ))}
                  </div>
                  <div>
                    - antonym :
                    {meaning.antonyms[0] &&
                      meaning.antonyms.map((antonym, idx) => (
                        <span key={idx}>{antonym},</span>
                      ))}
                  </div>
                  <div>
                    - definition :
                    <br />
                    {meaning.definitions[0] &&
                      meaning.definitions.map((definition, idx) => (
                        <span key={idx}>
                          {idx + 1} {")"} {definition.definition}
                          <br />
                        </span>
                      ))}
                  </div>
                  <br />
                </div>
              ))}
            </div>
            <br />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
