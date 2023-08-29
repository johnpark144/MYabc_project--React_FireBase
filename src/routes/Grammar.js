import React from 'react';
import styles from './Grammar.module.css';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';

export default function Grammar() {
  return (
    <div id='contents'>
      <div id={styles.grammarContainer}>
        <GrammarlyEditorPlugin clientId={process.env.REACT_APP_CLIENT_ID}>
          <textarea
            className={styles.grammar}
            rows={10}
            defaultValue='ex) Hello nike to met you
                    my name are John park.'
          />
        </GrammarlyEditorPlugin>
      </div>
    </div>
  );
}
