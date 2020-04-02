const LOAD_ENG_TEXT = 'LOAD-ENG-TEXT';
const LOAD_RUS_TEXT = 'LOAD-RUS-TEXT';
const SET_SENTENCES_COUNT = 'SET-SENTENCES-COUNT';

let initialState = {    
    lastSentenceNumber: null,    
    sentencesOnPageTop: 10,
    sentencesCount: 100,
    emptyVariable: null
}

/* let sentencesOnPageTop = initialState.sentencesOnPageTop; */

const uploadBooksReducer = (state = initialState, action) => {
        
    switch (action.type) {
        /* case LOAD_ENG_TEXT: {            
            let stateCopy = { ...state };
            return stateCopy;
        }
        case LOAD_RUS_TEXT: {            
            let stateCopy = { ...state };
            return stateCopy;
        } */
        case SET_SENTENCES_COUNT: {
            let stateCopy = { ...state, sentencesCount: action.count };
            return stateCopy;
            }
        default:
            return state;
    }
}

/* export const loadEngText = () => ({ type: LOAD_ENG_TEXT });
export const loadRusText = () => ({ type: LOAD_RUS_TEXT }); */
export const setSentencesCount = (totalCount) => ({ type: SET_SENTENCES_COUNT, count: totalCount });

export default uploadBooksReducer;
