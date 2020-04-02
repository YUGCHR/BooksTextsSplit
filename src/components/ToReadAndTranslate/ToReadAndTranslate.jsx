import React from 'react';
import Axios from 'axios';
import s from './ToReadAndTranslate.module.css'

const Sentence = (props) => {
    return (
        <div >
            {props.text}
        </div>
    )
}

let ToReadAndTranslate = (props) => {
    let lastSentenceNumber = props.readAndTranslatePage.lastSentenceNumber;
    let readingSentence = props.readAndTranslatePage.readingSentenceNumber;

    let sentencesOnPageTop = props.readAndTranslatePage.sentencesOnPageTop;
    let startSentenceTop = readingSentence - sentencesOnPageTop;
    let endSentenceTop = startSentenceTop + sentencesOnPageTop;

    let showTopSentences = props.readAndTranslatePage.engSentences.slice(startSentenceTop, endSentenceTop).map((sts) => {
        return <Sentence text={sts.sentenceText} />
    });

    let sentencesOnPageBottom = props.readAndTranslatePage.sentencesOnPageBottom;
    let startSentenceBottom = readingSentence + 1;
    let endSentenceBottom = startSentenceBottom + sentencesOnPageBottom;

    let showBottomSentences = props.readAndTranslatePage.engSentences.slice(startSentenceBottom, endSentenceBottom).map((sbs) => {
        return <Sentence text={sbs.sentenceText} />
    });

    let currentEngSentence = (props) => { return <Sentence text={props.id + props.sentenceText} /> };
    let showCurrentEngSentenceContext = currentEngSentence(props.readAndTranslatePage.engSentences[readingSentence]);

    let currentRusSentence = [props.readAndTranslatePage.rusSentences[readingSentence]].map((crs) => {
        return <Sentence text={crs.id + crs.sentenceText} />
    });

    props.readAndTranslatePage.engSentences.map(u => {
        Axios
            .post("https://localhost:5001/api/TodoItems", u)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))})
    
        return (<div>
            <div className={s.twoColumnsReading}>
                {lastSentenceNumber}
            </div>
            <div className={s.editLine}>
                Edit line
            </div>
            <div>
                <div>
                    <div className={s.twoColumnsTop}>
                        <p>
                            <button onClick={() => { props.scrollLineUp(readingSentence) }}>Scroll Line Up</button>
                        </p>
                    </div>
                    <div>
                        {showTopSentences}
                    </div>
                </div>
            </div>
            <div className={s.twoColumnsReading}>
                {readingSentence}
            </div>
            <div className={s.currentSentence}>
                {showCurrentEngSentenceContext}
            </div>

            <div>
            </div>
            <div className={s.translateLine}>
                {currentRusSentence}
            </div>
            <div>
                <div>
                    <div>{showBottomSentences}</div>
                </div>
                <div className={s.twoColumnsBottom}>
                    <p>
                        <button onClick={() => { props.scrollLineDown(readingSentence) }}>Scroll Line Down</button>
                    </p>
                </div>
            </div>
        </div >)
    }

export default ToReadAndTranslate;
