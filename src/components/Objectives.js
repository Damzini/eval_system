import React, { Component } from 'react';
import { objQuestions } from './Questions';



class ObjectiveList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            response: []
        }

        this.handleOnclick = this.handleOnclick.bind(this);
    }


    handleOnclick = (question) => (e) => {
        const answer = e.target.value;
        const response = {
            [question]: answer
        }
        const stateResponse = this.state.response;
        stateResponse.push(response)

        this.setState({
            response: stateResponse
        })
        console.log(this.state.response)
    }

    render() {
        const listObjectives = objQuestions.map((question) =>
            <div>
                <ul>
                    <li>{question}</li>
                </ul>
                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className='form-check-input'
                            type='radio'
                            name={question}
                            value='true'
                            onClick={this.handleOnclick(question)}
                        />
                        True
                        </label>
                </div>

                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className='form-check-input'
                            type='radio'
                            name={question}
                            value='false'
                            onClick={this.handleOnclick(question)}
                        />
                        False
                        </label>
                </div>

                <div className="form-check form-check-inline">
                    <label>
                        <input
                            className='form-check-input'
                            type='radio'
                            name={question}
                            value='maybe'
                            onClick={this.handleOnclick(question)}
                        />
                        Maybe
                        </label>
                </div>

            </div >
        );

        return (
            <div>
                <ol>{listObjectives}</ol>
            </div>
        );
    }
}

export default ObjectiveList;