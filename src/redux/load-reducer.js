const LOAD_ENG_TEXT = 'LOAD-ENG-TEXT';
const LOAD_RUS_TEXT = 'LOAD-RUS-TEXT';
const FETCH_SENTENCE_COUNT = 'FETCH-SENTENCE-COUNT';
const SET_SENTENCES_COUNT = 'SET-SENTENCES-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';

let initialState = {
    engSentences: [
        { languageId: 0, sentenceText: '01 How to explain?' },
        { languageId: 0, sentenceText: '02 How to describe?' },
        { languageId: 0, sentenceText: '03 Even the omniscient viewpoint quails.' },
        { languageId: 0, sentenceText: '04 * ' },
        { languageId: 0, sentenceText: '05 A singleton star, reddish and dim.' },
        { languageId: 0, sentenceText: '06 A ragtag of asteroids, and a single planet, more like a moon.' },
        { languageId: 0, sentenceText: '07 In this era the star hung near the galactic plane, just beyond the Beyond.' },
        { languageId: 0, sentenceText: '08 The structures on the surface were gone from normal view, pulverized into regolith across a span of aeons.' },
        { languageId: 0, sentenceText: '09 The treasure was far underground, beneath a network of passages, in a single room filled with black.' },
        { languageId: 0, sentenceText: '10 Information at the quantum density, undamaged.' },
        { languageId: 0, sentenceText: '11 Maybe five billion years had passed since the archive was lost to the nets.' },
        { languageId: 0, sentenceText: '12The curse of the mummy’s tomb, a comic image from mankind’s own prehistory, lost before time.' },
        { languageId: 0, sentenceText: '13 * ' },
        { languageId: 0, sentenceText: '14 They had laughed when they said it, laughed with joy at the treasure… and determined to be cautious just the same.' },
        { languageId: 0, sentenceText: '15 They would live here a year or five, the little company from Straum, the archaeologist programmers, their families and schools.' },
        { languageId: 0, sentenceText: '16 A year or five would be enough to handmake the protocols, to skim the top and identify the treasure’s origin in time and space, to learn a secret or two that would make Straumli Realm rich.' },
        { languageId: 0, sentenceText: '17 And when they were done, they would sell the location; perhaps build a network link (but chancier that  —  this was beyond the Beyond; who knew what Power might grab what they’d found).' },
        { languageId: 0, sentenceText: '18  * ' },
        { languageId: 0, sentenceText: '19 So now there was a tiny settlement on the surface, and they called it the High Lab.' },
        { languageId: 0, sentenceText: '20 It was really just humans playing with an old library.' },
        { languageId: 0, sentenceText: '21 It should be safe, using their own automation, clean and benign.' },
        { languageId: 0, sentenceText: '22 This library wasn’t a living creature, or even possessed of automation (which here might mean something more, far more, than human).' },
        { languageId: 0, sentenceText: '23 They would look and pick and choose, and be careful not to be burned…' },
        { languageId: 0, sentenceText: '24  * ' },
        { languageId: 0, sentenceText: '25 Humans starting fires and playing with the flames.' },
        { languageId: 0, sentenceText: '26 * ' },
        { languageId: 0, sentenceText: '27 The archive informed the automation.' },
        { languageId: 0, sentenceText: '28 Data structures were built, recipes followed.' },
        { languageId: 0, sentenceText: '29 A local network was built, faster than anything on Straum, but surely safe.' },
        { languageId: 0, sentenceText: '30 Nodes were added, modified by other recipes.' },
        { languageId: 0, sentenceText: '31 The archive was a friendly place, with hierarchies of translation keys that led them along.' },
        { languageId: 0, sentenceText: '32 Straum itself would be famous for this.' }
    ],

    lastSentenceNumber: null,
    sentencesOnPageTop: 10,
    sentencesCount: 777,
    emptyVariable: null,
    isLoaded: false,
    isFetching: false
}

let sentencesOnPageTop = initialState.sentencesOnPageTop;
let lastSentenceNumber = initialState.engSentences.length;
initialState.lastSentenceNumber = lastSentenceNumber;

const uploadBooksReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_ENG_TEXT: {            
            let stateCopy = { ...state };
            return stateCopy;
        }
        case TOGGLE_IS_LOADING: {
            return { ...state, isLoaded: action.isLoaded }
        }
        case LOAD_RUS_TEXT: {            
            let stateCopy = { ...state };
            return stateCopy;
        }
        case FETCH_SENTENCE_COUNT: {            
            let stateCopy = { ...state };
            return stateCopy;
        }
        case SET_SENTENCES_COUNT: {
            let stateCopy = { ...state, sentencesCount: action.count };
            return stateCopy;
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const loadEngText = () => ({ type: LOAD_ENG_TEXT });
export const toggleIsLoading = (isLoaded) => ({ type: TOGGLE_IS_LOADING, isLoaded });
export const loadRusText = () => ({ type: LOAD_RUS_TEXT });
export const fetchSentencesCount = () => ({ type: FETCH_SENTENCE_COUNT });
export const setSentencesCount = (totalCount) => ({ type: SET_SENTENCES_COUNT, count: totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default uploadBooksReducer;
