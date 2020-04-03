import React from 'react';
import Axios from 'axios';
import s from './UploadBooks.module.css'

const UploadBooks = (props) => {

    let engButtonCaption = (props.isLoaded ? 'loaded count =' + props.sentencesCount : 'Load English Text');
    return (<div>        
        <div>
            <div>
                <div className={s.twoColumnsTop}>
                    <p>
                        <button disabled = {props.isLoaded} onClick={ () => {props.loadEngText()} }> {engButtonCaption} </button>                        
                    </p>
                </div>
                
            </div>
        </div>
        <div>Sentence Count = {props.sentencesCount}</div>
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
