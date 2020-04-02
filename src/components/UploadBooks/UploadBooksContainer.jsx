import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setSentencesCount } from '../../redux/load-reducer';
import UploadBooks from './UploadBooks';

class UploadBooksContainerAPI extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {

        Axios
            .get(`https://localhost:5001/api/TodoItems/count`)                     
            .then(Response => {
                this.props.setSentencesCount(Response.data.sentencesCount);                
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
        <UploadBooks 
                /* loadEngText={this.props.loadEngText}
                loadRusText={this.props.loadRusText} */
                sentencesCount={this.props.sentencesCount}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        sentencesCount: state.uploadBooksPage.sentencesCount        
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

let UploadBooksContainer = connect(mapStateToProps, { setSentencesCount })(UploadBooksContainerAPI);

export default UploadBooksContainer;
