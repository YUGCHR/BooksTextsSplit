const SCROLL_LINE_UP = 'SCROLL-LINE-UP';
const SCROLL_LINE_DOWN = 'SCROLL-LINE-DOWN';

let initialState = {
    engSentences: [
        { id: 1, sentenceText: 'How to explain?' },
        { id: 2, sentenceText: 'How to describe?' },
        { id: 3, sentenceText: 'Even the omniscient viewpoint quails.' },
        { id: 1, sentenceText: ' * ' },
        { id: 4, sentenceText: 'A singleton star, reddish and dim.' },
        { id: 5, sentenceText: 'A ragtag of asteroids, and a single planet, more like a moon.' },
        { id: 6, sentenceText: 'In this era the star hung near the galactic plane, just beyond the Beyond.' },
        { id: 7, sentenceText: 'The structures on the surface were gone from normal view, pulverized into regolith across a span of aeons.' },
        { id: 1, sentenceText: 'The treasure was far underground, beneath a network of passages, in a single room filled with black.' },
        { id: 1, sentenceText: 'Information at the quantum density, undamaged.' },
        { id: 1, sentenceText: 'Maybe five billion years had passed since the archive was lost to the nets.' },
        { id: 1, sentenceText: 'The curse of the mummy’s tomb, a comic image from mankind’s own prehistory, lost before time.' },
        { id: 1, sentenceText: ' * ' },
        { id: 1, sentenceText: 'They had laughed when they said it, laughed with joy at the treasure… and determined to be cautious just the same.' },
        { id: 1, sentenceText: 'They would live here a year or five, the little company from Straum, the archaeologist programmers, their families and schools.' },
        { id: 1, sentenceText: 'A year or five would be enough to handmake the protocols, to skim the top and identify the treasure’s origin in time and space, to learn a secret or two that would make Straumli Realm rich.' },
        { id: 1, sentenceText: 'And when they were done, they would sell the location; perhaps build a network link (but chancier that  —  this was beyond the Beyond; who knew what Power might grab what they’d found).' },
        { id: 1, sentenceText: ' * ' },
        { id: 1, sentenceText: 'So now there was a tiny settlement on the surface, and they called it the High Lab.' },
        { id: 1, sentenceText: 'It was really just humans playing with an old library.' },
        { id: 1, sentenceText: 'It should be safe, using their own automation, clean and benign.' },
        { id: 1, sentenceText: 'This library wasn’t a living creature, or even possessed of automation (which here might mean something more, far more, than human).' },
        { id: 1, sentenceText: 'They would look and pick and choose, and be careful not to be burned…' },
        { id: 1, sentenceText: ' * ' },
        { id: 1, sentenceText: 'Humans starting fires and playing with the flames.' },
        { id: 1, sentenceText: ' * ' },
        { id: 1, sentenceText: 'The archive informed the automation.' },
        { id: 1, sentenceText: 'Data structures were built, recipes followed.' },
        { id: 1, sentenceText: 'A local network was built, faster than anything on Straum, but surely safe.' },
        { id: 1, sentenceText: 'Nodes were added, modified by other recipes.' },
        { id: 1, sentenceText: 'The archive was a friendly place, with hierarchies of translation keys that led them along.' },
        { id: 1, sentenceText: 'Straum itself would be famous for this.' }
    ],
    readingSentenceNumber: 5
}

const readAndTranslateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCROLL_LINE_UP: {            
            let stateCopy = { ...state, readingSentenceNumber: action.sentenceNumber + 1};            
            return stateCopy;
        }
        case SCROLL_LINE_DOWN: {
            let stateCopy = { ...state, readingSentenceNumber: action.sentenceNumber - 1};
            return stateCopy;
        }
        
        default:
            return state;
    }
}

export const scrollLineUp = (sentenceNumber) => ({ type: SCROLL_LINE_UP, sentenceNumber});
export const scrollLineDown = (sentenceNumber) => ({ type: SCROLL_LINE_DOWN, sentenceNumber});

export default readAndTranslateReducer;
