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

    let lastSentenceNumber = props.lastSentenceNumber;
    let readingSentence = props.readingSentenceNumber;

    let sentencesOnPageTop = props.sentencesOnPageTop;
    let startSentenceTop = readingSentence - sentencesOnPageTop;
    let endSentenceTop = startSentenceTop + sentencesOnPageTop;

    let showTopSentences = props.engSentences.slice(startSentenceTop, endSentenceTop).map((sts) => {
        return <Sentence text={sts.sentenceText} />
    });

    let sentencesOnPageBottom = props.sentencesOnPageBottom;
    let startSentenceBottom = readingSentence + 1;
    let endSentenceBottom = startSentenceBottom + sentencesOnPageBottom;

    let showBottomSentences = props.engSentences.slice(startSentenceBottom, endSentenceBottom).map((sbs) => {
        return <Sentence text={sbs.sentenceText} />
    });

    let showCurrentEngSentenceContext = null;
    if(props.engSentences[readingSentence])
    {
    let currentEngSentence = (props1) => { return <Sentence text={props1.id + props1.sentenceText} /> };
    showCurrentEngSentenceContext = currentEngSentence(props.engSentences[readingSentence]);
    }

    let showCurrentRusSentenceContext = null;
    if(props.rusSentences[readingSentence])
    {
    let currentRusSentence = (props1) => { return <Sentence text={props1.id + props1.sentenceText} /> };
    showCurrentRusSentenceContext = currentRusSentence(props.rusSentences[readingSentence]);
    }
    
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
                {showCurrentRusSentenceContext}
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
