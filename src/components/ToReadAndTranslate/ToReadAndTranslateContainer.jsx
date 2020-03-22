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
        scrollLineUp: (sentenceNumber) => {
            dispatch(scrollLineUp(sentenceNumber));
        },
        scrollLineDown: (sentenceNumber) => {            
            dispatch(scrollLineDown(sentenceNumber));
        }
    }
}

let ToReadAndTranslateContainer = connect(mapStateToProps, mapDispatchToProps)(ToReadAndTranslate);

export default ToReadAndTranslateContainer;
