import React from 'react';
import s from './ToReadAndTranslate.module.css'

const Sentence = (props) => {
    return (
        <div >
            {props.text}

        </div>
    )
}

let ToReadAndTranslate = (props) => {
    let startSentence = props.readAndTranslatePage.readingSentenceNumber;
    let sentencesOnPage = props.readAndTranslatePage.sentencesOnPage;
    let endSentence = startSentence + sentencesOnPage;
    let showSentences = props.readAndTranslatePage.engSentences.slice(startSentence, endSentence).map((s) => { return <Sentence text={s.sentenceText} /> });

    return (<div>
        <div className={s.editLine}>
            Edit line
            </div>
        <div>
            <button onClick={() => { props.scrollLineUp(startSentence, sentencesOnPage) }}>Scroll Line Up</button>
        </div>
        <div>
            <div>{showSentences}</div>
        </div>
        <div className={s.currentSentence}>
            Current Sentence
            </div>
        <div>
        </div>
        <div className={s.translateLine}>
            Translate line
        </div>
        <div>
            <button onClick={() => { props.scrollLineDown(startSentence, sentencesOnPage) }}>Scroll Line Down</button>
        </div>
    </div>)
}

export default ToReadAndTranslate;
