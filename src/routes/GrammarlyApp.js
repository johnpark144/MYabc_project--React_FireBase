import React from "react";
import styles from "./GrammarlyApp.module.css";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default function GrammarlyApp() {
  return (
    <div id="contents">
      <div id={styles.grammarlyContainer}>
        <GrammarlyEditorPlugin clientId={process.env.REACT_APP_CLIENT_ID}>
          <textarea
            className={styles.grammarly}
            rows={10}
            defaultValue="ex) Hello nike to met you
                    my name are John park."
          />
        </GrammarlyEditorPlugin>
      </div>
    </div>
  );
}
