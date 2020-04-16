import React from 'react';
import s from './UploadBooks.module.css'

let loadedBookTitle = (loadedTextTitle, engTextTitle, languageId, isTextLoaded) => {
    let separ = ' - ';
    let showTitle = isTextLoaded[languageId]
        ? engTextTitle[languageId].authorName + separ + engTextTitle[languageId].bookTitle
        : null;
    return <div className={s.bookTitle}>
        <div>
            {loadedTextTitle[languageId]}
        </div>
        <div>
            {showTitle}
        </div>
    </div>
};

let loadedButtonsNames = (setButtonCaption, loadText, languageId, isTextLoaded) => {
    return <div>
        <button className={s.loadButtons}
            disabled={isTextLoaded[languageId]}
            onClick={(e) => { loadText(languageId); }}>
            {setButtonCaption(languageId)}
        </button>
    </div>
};

const UploadBooks = (props) => {

    return (<div>
        <p className={s.pageName}>
            UPLOAD BOOKS CONTROL PANEL
        </p>
        <div>
            {props.creativeArrayLanguageId.map((languageId) => {
                return <div>
                    <div>
                        {loadedButtonsNames(props.setButtonCaption, props.loadText, languageId, props.isTextLoaded)}
                    </div>
                    <div className={s.twoColumnsBottom}>

                        {loadedBookTitle(props.loadedTextTitle, props.bookTitle, languageId, props.isTextLoaded)}
                        <p>
                        </p>
                    </div>
                </div>
            }
            )}
        </div >
        <h1>FLEXBOX</h1>
        <div className={s.flexContainer}>
<div className={s.flexElement}>1 A year or five would be enough to handmake the protocols, to skim the top and identify the treasure’s origin in time and space, to learn a secret or two that would make Straumli Realm rich.</div>
<div className={s.flexElement}>2 They would live here a year or five, the little company from Straum, the archaeologist programmers, their families and schools.</div>
<div className={s.flexElement}>3 A year or five would be enough to handmake the protocols, to skim the top and identify the treasure’s origin in time and space, to learn a secret or two that would make Straumli Realm rich.</div>
<div className={s.flexElement}>4 And when they were done, they would sell the location; perhaps build a network link (but chancier that  —  this was beyond the Beyond; who knew what Power might grab what they’d found).</div>
<div className={s.flexElement}>5 And when they were done, they would sell the location; perhaps build a network link (but chancier that  —  this was beyond the Beyond; who knew what Power might grab what they’d found).</div>
<div className={s.flexElement}>6 A year or five would be enough to handmake the protocols, to skim the top and identify the treasure’s origin in time and space, to learn a secret or two that would make Straumli Realm rich.</div>
        </div>
    </div>)
}

export default UploadBooks;
