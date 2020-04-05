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

    let buttonEngCaption = (props.isLoaded ? 'loaded count = ' + props.sentencesCount[0] : 'Load English Text -/' + props.sentencesCount[0]);
    let buttonRusCaption = (props.isLoaded ? 'loaded count = ' + props.sentencesCount[1] : 'Load Russian Text -/' + props.sentencesCount[1]);

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
                        <button /* disabled = {props.isLoaded} */ onClick={() => { props.loadText(0) }}> {buttonEngCaption} </button>
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
                        <button /* disabled = {props.isLoaded} */ onClick={() => { props.loadText(1) }}> {buttonRusCaption} </button>
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
