import React from 'react';
import Axios from 'axios';
import s from './UploadBooks.module.css'

const UploadBooks = (props) => {

let showTotalCount = props.sentencesCount;

    return (<div>
        
        {/* <div>
            <div>
                <div className={s.twoColumnsTop}>
                    <p>
                        <button onClick={() => { props.loadEngText() }}>Load English Text</button>
                    </p>
                </div>
                
            </div>
        </div> */}
        <div>Sentence Count = {showTotalCount}</div>
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
