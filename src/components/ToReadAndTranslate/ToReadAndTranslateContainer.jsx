import { connect } from 'react-redux';
import { scrollLineUp, scrollLineDown } from '../../redux/read-reducer';
import ToReadAndTranslate from './ToReadAndTranslate';

let mapStateToProps = (state) => {
    return {
        readAndTranslatePage: state.readAndTranslatePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        scrollLineUp: (sentenceNumber, sentencesOnPage) => {
            dispatch(scrollLineUp(sentenceNumber, sentencesOnPage));
        },
        scrollLineDown: (sentenceNumber, sentencesOnPage) => {
            dispatch(scrollLineDown(sentenceNumber, sentencesOnPage));
        }
    }
}

let ToReadAndTranslateContainer = connect(mapStateToProps, mapDispatchToProps)(ToReadAndTranslate);

export default ToReadAndTranslateContainer;
