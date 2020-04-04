import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { loadText, toggleIsLoading, fetchSentencesCount, setSentencesCount, toggleIsFetching } from '../../redux/load-reducer';
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
                this.props.engSentencesCount === 0 ? this.props.toggleIsLoading(false) : this.props.toggleIsLoading(true);
            });
    }

    loadText = () => {
        if (this.props.engSentencesCount === 0) {
            this.props.toggleIsFetching(true);
            Axios
                .post("https://localhost:5001/api/TodoItems", this.props.engSentences)
                .then(Response => {
                    this.props.toggleIsFetching(false);
                    this.fetchSentencesCount();
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
                engSentencesCount={this.props.engSentencesCount}
                isLoaded={this.props.isLoaded}
                fetchSentencesCount={this.fetchSentencesCount}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        engSentencesCount: state.uploadBooksPage.engSentencesCount,
        isLoaded: state.uploadBooksPage.isLoaded,
        engSentences: state.uploadBooksPage.engSentences,
        isFetching: state.uploadBooksPage.isFetching
    }
}

let UploadBooksContainer = connect(mapStateToProps,
    { loadText, toggleIsLoading, fetchSentencesCount, setSentencesCount, toggleIsFetching })
    (UploadBooksContainerAPI);

export default UploadBooksContainer;
