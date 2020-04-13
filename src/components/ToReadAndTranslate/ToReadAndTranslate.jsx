import React from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
//import { Link, animateScroll as scroll } from 'react-scroll';
import s from './ToReadAndTranslate.module.css'

const showSentences = (langSentences, startSentence, sentencesOnPageTop) => {
    let endSentence = startSentence + sentencesOnPageTop;
    return langSentences.slice(startSentence, endSentence).map((sts) => {
        return <div >
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
debugger;
    return (<div>
       {/*  <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        ></Link> */}
        {/* <div>
            <ReactScrollWheelHandler
                upHandler={() => console.log("scroll up")}
                downHandler={() => console.log("scroll down")}
            ></ReactScrollWheelHandler>
        </div> */}
        <div>            
            <ReactScrollWheelHandler
                upHandler={() => { props.scrollLineUp(r) }}
                downHandler={() => { props.scrollLineDown(r) }}>
            </ReactScrollWheelHandler>
        </div>
        <div className={s.twoColumnsReading}>
            {props.lastSentenceNumber}
        </div>
        <div className={s.editLine}>
            Edit line
            </div>
        <div>
            <div className={s.twoColumnsTop}>
                <p>
                    <button onClick={() => { props.scrollLineUp(r) }}>Scroll Line Up</button>
                </p>
            </div>
            <div>
                {showSentences(props.engSentences, r - sentencesOnPageTop, sentencesOnPageTop)}
            </div>
        </div>
        <div className={s.twoColumnsReading}>
            {r}
        </div>
        <div className={s.currentSentence}>
            {showCurrentSentenceContext(props.engSentences[r])}
        </div>

        <div className={s.translateLine}>
            {showCurrentSentenceContext(props.rusSentences[r])}
        </div>
        <div>
            <div>
                <div>
                    {showSentences(props.engSentences, r + 1, sentencesOnPageTop)}
                </div>
            </div>
            <div className={s.twoColumnsBottom}>
                <p>
                    <button onClick={() => { props.scrollLineDown(r) }}>Scroll Line Down</button>
                </p>
            </div>
        </div>
    </div >)
}

export default ToReadAndTranslate;
