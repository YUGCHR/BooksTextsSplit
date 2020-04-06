import React from 'react';
import Axios from 'axios';
import s from './UploadBooks.module.css'

const Sentence = (props) => {
    return (
        <div >
            {props.text}
        </div>
    )
}

const loadButton = (props) => {
    return (
        <div className={s.resetFloat}>
            {props.text}
        </div>
    )
}

const UploadBooks = (props) => {

    let engLanguageId = 0;
    let rusLanguageId = 1;

    /* {pages.map(p => {
        return <span className={getClassName(p)} onClick={(e) => { props.onPageChanges(p); }}>{p}</span>
    })} */
    
    let engTexTitle = 'English text title: ';
    let currentEngSentence = (props) => { return <Sentence text={engTexTitle + props.sentenceText} /> };
    let engFirstSentence = currentEngSentence(props.engSentences[0]);

    let rusTexTitle = 'Russian text title: ';
    let currentRusSentence = (props) => { return <Sentence text={rusTexTitle + props.sentenceText} /> };
    let rusFirstSentence = currentRusSentence(props.rusSentences[0]);

    return (<div>
        <div>
            <div>
                <div className={s.twoColumnsTop}>
                    <p>
                        <button 
                        disabled = {props.isTextLoaded[engLanguageId]} 
                        onClick={() => { props.loadText(engLanguageId) }}> 
                        {props.setButtonCaption(engLanguageId)} 
                        </button>
                    </p>
                </div>
                <div className={s.twoColumnsBottom}>
                    <p>
                        {engFirstSentence}
                    </p>
                </div>
            </div>
            <p></p>
            <div>
                <div className={s.twoColumnsTop}>
                    <p>
                        <button
                        disabled = {props.isTextLoaded[rusLanguageId]} 
                        onClick={() => { props.loadText(rusLanguageId) }}> 
                        {props.setButtonCaption(rusLanguageId)} 
                        </button>
                    </p>
                </div>
                <div className={s.twoColumnsBottom}>
                    <p>
                        {rusFirstSentence}
                    </p>
                </div>
            </div>
        </div>
    </div >)
}

export default UploadBooks;
