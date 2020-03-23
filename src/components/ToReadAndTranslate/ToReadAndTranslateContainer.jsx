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
        scrollLineUp: (newSentenceNumber) => {
            dispatch(scrollLineUp(newSentenceNumber));
        },
        scrollLineDown: (newSentenceNumber) => {
            dispatch(scrollLineDown(newSentenceNumber));
        }
    }
}

let ToReadAndTranslateContainer = connect(mapStateToProps, mapDispatchToProps)(ToReadAndTranslate);

export default ToReadAndTranslateContainer;
