import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { loadText, toggleIsLoading, fetchSentencesCount, setSentencesCount, toggleIsFetching } from '../../redux/load-reducer';
import UploadBooks from './UploadBooks';
import Preloader from '../common/preloader/Preloader';

class UploadBooksContainerAPI extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        this.fetchSentencesCount(0);
        this.fetchSentencesCount(1);
    }

    fetchSentencesCount = (languageId) => {
        this.props.toggleIsFetching(true);
        Axios
            .get(`https://localhost:5001/api/TodoItems/count/${languageId}`)
            .then(Response => {
                debugger;
                this.props.toggleIsFetching(false);
                this.props.setSentencesCount(Response.data.sentencesCount, languageId);
                this.props.sentencesCount[languageId] === 0
                    ? this.props.toggleIsLoading(false, languageId)
                    : this.props.toggleIsLoading(true, languageId);
            });
    }

    loadText = (languageId) => {
        let sentencesCount = this.props.engSentencesCount;
        let allSentences = this.props.engSentences;

        if (languageId === 0) {
            sentencesCount = this.props.engSentencesCount;
            allSentences = this.props.engSentences;
        };
        if (languageId === 1) {
            sentencesCount = this.props.rusSentencesCount;
            allSentences = this.props.rusSentences;
        };

        if (sentencesCount === 0) {
            this.props.toggleIsFetching(true);
            Axios
                .post("https://localhost:5001/api/TodoItems", allSentences)
                .then(Response => {
                    /* (Response.data.totalCount - to add! */
                    this.props.toggleIsFetching(false);
                    this.fetchSentencesCount(languageId);
                    this.props.toggleIsLoading(true);
                });
        }
        else { alert('cannot load once more') }
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}//;
            <UploadBooks
                loadText={this.loadText}
                engSentences={this.props.engSentences}
                rusSentences={this.props.rusSentences}
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
        rusSentences: state.uploadBooksPage.rusSentences,
        isFetching: state.uploadBooksPage.isFetching
    }
}

let UploadBooksContainer = connect(mapStateToProps,
    { loadText, toggleIsLoading, fetchSentencesCount, setSentencesCount, toggleIsFetching })
    (UploadBooksContainerAPI);

export default UploadBooksContainer;
