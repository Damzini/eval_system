import React, { Component } from 'react';
import { subjQuestions } from './Questions';


class SubjectiveList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: '',
            response: [],
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }


    handleOnChange = (question) => (e) => {
        this.setState({
            question: question,
            answer: e.target.value
        })
    }



    render() {
        const listSubjectives = subjQuestions.map((question) =>
            < div >
                <ul>
                    <li>{question}</li>
                </ul>
                <textarea
                    type='text'
                    className='form-control form-control-lg'
                    onChange={this.handleOnChange(question)}
                />
            </div >
        );

        return (
            <div>
                <ol>{listSubjectives}</ol>
            </div>
        );
    }
}

export default SubjectiveList;