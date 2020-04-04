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

const UploadBooks = (props) => {

    let buttonCaption = (props.isLoaded ? 'loaded count = ' + props.engSentencesCount : 'Load English Text');
    let engTextStartsFrom = 'English text starts from: ';
    let currentEngSentence = (props) => { return <Sentence text={engTextStartsFrom + props.sentenceText} /> };    
    let engFirstSentence = currentEngSentence(props.engSentences[0]);
    
    return (<div>
        <div>
            <div>
                <div className={s.twoColumnsTop}>
                    <p>
                        <button /* disabled = {props.isLoaded} */ onClick={() => { props.loadText() }}> {buttonCaption} </button>
                    </p>
                </div>

            </div>
        </div>
        <div>{engFirstSentence}</div>
        {/* <div>
            <div>
                
            </div>
            <div className={s.twoColumnsBottom}>
                <p>
                    <button onClick={() => { props.loadRusText() }}>Load Russian Text</button>
                </p>
            </div>
        </div> */}
    </div >)
}

export default UploadBooks;
