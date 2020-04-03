import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { loadEngText, toggleIsLoading, loadRusText, fetchSentencesCount, setSentencesCount, toggleIsFetching } from '../../redux/load-reducer';
import UploadBooks from './UploadBooks';
import Preloader from '../common/preloader/Preloader';

class UploadBooksContainerAPI extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        this.fetchSentencesCount()
    }

    fetchSentencesCount = () => {
        this.props.toggleIsFetching(true);     
        Axios
            .get(`https://localhost:5001/api/TodoItems/count`)
            .then(Response => {
                this.props.toggleIsFetching(false);
                this.props.setSentencesCount(Response.data.sentencesCount);
            });
    }

    loadEngText = (isLoaded) => {
        this.props.toggleIsFetching(true);
        
            Axios
                .post("https://localhost:5001/api/TodoItems", this.props.engSentences)
                .then(Response => {       
                    this.props.toggleIsFetching(false);
                    this.fetchSentencesCount();
                    this.props.toggleIsLoading(true);
                });
     
    }

    /* props.readAndTranslatePage.engSentences.map(u => {
        Axios
            .post("https://localhost:5001/api/TodoItems", u)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))}) */

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}//;
            <UploadBooks
                loadEngText={this.loadEngText}
                loadRusText={this.props.loadRusText}
                sentencesCount={this.props.sentencesCount}
                isLoaded={this.props.isLoaded}
                fetchSentencesCount={this.fetchSentencesCount}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        sentencesCount: state.uploadBooksPage.sentencesCount,
        isLoaded: state.uploadBooksPage.isLoaded,
        engSentences: state.uploadBooksPage.engSentences,
        isFetching: state.uploadBooksPage.isFetching
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        loadEngText: () => {
            dispatch(loadEngText());
        },
        loadRusText: () => {
            dispatch(loadRusText());
        }
    }
} */

let UploadBooksContainer = connect(mapStateToProps,
    { loadEngText, toggleIsLoading, loadRusText, fetchSentencesCount, setSentencesCount, toggleIsFetching })
    (UploadBooksContainerAPI);

export default UploadBooksContainer;
