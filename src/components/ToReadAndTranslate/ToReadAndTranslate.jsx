import React from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import s from './ToReadAndTranslate.module.css'

const showSentences = (langSentences, startSentence, sentencesOnPageTop) => {
    let endSentence = startSentence + sentencesOnPageTop;
    return langSentences.slice(startSentence, endSentence).map((sts) => {
        return <div /* className={s.oneSentence} */>
            {sts.sentenceText}
        </div>
    })
};

const showCurrentSentenceContext = (currentLangSentence) => {
    if (currentLangSentence) {
        return <div>
            {'id = ' + currentLangSentence.id + ' / ' + currentLangSentence.sentenceText}
        </div>
    };
}

let ToReadAndTranslate = (props) => {
    let r = props.readingSentenceNumber;
    let sentencesOnPageTop = props.sentencesOnPageTop;

    return (<div>
        <div className={s.editWrapper}>
            <div className={s.lastSentenceNumber}>
                {props.lastSentenceNumber}
            </div>
            <div className={s.editLine}>
                Edit line
                </div>
            <div className={s.readingSentenceNumber}>
                {r}
            </div>
        </div>
        <div></div>
        <ReactScrollWheelHandler
            upHandler={() => { props.scrollLineUp(r) }}
            downHandler={() => { props.scrollLineDown(r) }}
            timeout={100} >
            <div className={s.sentencesWrapper}>
                <div className={s.topMargin}></div>
                <div className={s.topSentences}>
                    <div className={s.topFlexSentences}>
                        {showSentences(props.engSentences, r - sentencesOnPageTop, sentencesOnPageTop)}
                    </div>
                </div>
                <div className={s.buttonUp}>
                    <button onClick={() => { props.scrollLineUp(r) }}>Scroll Line Up</button>
                </div>
                <div className={s.engReadingSentence}>
                    <div className={s.readingFlexSentences}>
                        {showCurrentSentenceContext(props.engSentences[r])}
                    </div>
                </div>
                <div className={s.rusReadingSentence}>
                    <div className={s.translationFlexSentences}>
                        {showCurrentSentenceContext(props.rusSentences[r])}
                    </div>
                </div>
                <div className={s.bottomSentences}>
                    <div className={s.bottomFlexSentences}>
                        {showSentences(props.engSentences, r + 1, sentencesOnPageTop)}
                    </div>
                </div>
                <div className={s.buttonDown}>
                    <div className={s.downFlexButton}>
                    <button onClick={() => { props.scrollLineDown(r) }}>Scroll Line Down</button>
                    </div>
                </div>
            </div>
        </ReactScrollWheelHandler>

    </div >)
}

export default ToReadAndTranslate;
