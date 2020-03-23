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
    let readingSentence = props.readAndTranslatePage.readingSentenceNumber;

    let sentencesOnPageTop = props.readAndTranslatePage.sentencesOnPageTop;
    let startSentenceTop = readingSentence - sentencesOnPageTop;
    let endSentenceTop = startSentenceTop + sentencesOnPageTop;

    let showTopSentences = props.readAndTranslatePage.engSentences.slice(startSentenceTop, endSentenceTop).map((s) => 
    { return <Sentence text={s.sentenceText} /> });

    let sentencesOnPageBottom = props.readAndTranslatePage.sentencesOnPageBottom;
    let startSentenceBottom = readingSentence + 1;
    let endSentenceBottom = startSentenceBottom + sentencesOnPageBottom;

    let showBottomSentences = props.readAndTranslatePage.engSentences.slice(startSentenceBottom,
        endSentenceBottom).map((s) => 
        { return <Sentence text={s.sentenceText} /> });

    let currentEngSentence = [props.readAndTranslatePage.engSentences[readingSentence]].map((s) => 
    { return  <Sentence text={s.sentenceText} /> });

    let currentRusSentence = [props.readAndTranslatePage.rusSentences[readingSentence]].map((s) => 
    { return  <Sentence text={s.sentenceText} /> });


    return (<div>
        <div className={s.editLine}>
            Edit line
            </div>
        <div>
            <button onClick={() => { props.scrollLineUp(readingSentence) }}>Scroll Line Up</button>
        </div>
        <div>
            <div>{showTopSentences}</div>
        </div>
        <div className={s.currentSentence}>
          {currentEngSentence}
        </div>
        <div>
        </div>
        <div className={s.translateLine}>
        {currentRusSentence}
        </div>
        <div>
            <div>{showBottomSentences}</div>
        </div>
        <div>
            <button onClick={() => { props.scrollLineDown(readingSentence) }}>Scroll Line Down</button>
        </div>
    </div>)
}

export default ToReadAndTranslate;
