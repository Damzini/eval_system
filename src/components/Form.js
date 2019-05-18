import React, { Component } from 'react';
import ObjectiveList from './Objectives';
import SubjectiveList from './Subjectives';


class Form extends Component {

    render() {
        return (
            <div className='container'>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Student - Lecturer Evaluation Form</li>
                        </ol>
                    </nav>
                </div>

                <form>
                    <div>
                        <div className='form-group'>
                            <ObjectiveList />
                        </div>
                        <div className='form-group'>
                            <SubjectiveList />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>

            </div>
        );
    }
}

export default Form;