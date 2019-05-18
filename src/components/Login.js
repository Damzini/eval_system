import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router';


class Form extends Component {

    render() {
        return (
            <div className='container col-md-4 auto'>
                <form>
                    {/* Email */}
                    <div className='form-group'>
                        <label for='email'>Email</label>
                        <input type='email' class='form-control' id='email' placeholder='Enter Email' />  
                    </div>

                    {/* Password */}
                    <div className='form-group'>
                        <label for='password'>Password</label>
                        <input type='password' class='form-control' placeholder='Enter Password' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;