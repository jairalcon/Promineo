import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { usersAPI } from '../rest/Endpoint';
// import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';

export default function Login({ setToken }) {
    const [ username, setUserName] = useState('');
    // const [ password, setPassword] = useState('');
    // const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit event", event);
        console.log("onSubmit event product:", event.target.name);

        usersAPI.post([username, /*password*/]);
        setUserName("");
        // setPassword("");
    };

    // const goQuiz = () => {
    //     navigate(<Quiz />)
    // }

    function startQuiz() {
        <Quiz />;
    }

    function handleChange(event) {
        console.log(" handleChange name", event.target.name);
        console.log("userName handleChange value", event.target.value);
        setUserName(`${event.target.name}: ${event.target.value}`);
    }
    
    // function handleChange2(event) {
    //     console.log(" handleChange name", event.target.name);
    //     console.log("password handleChange value", event.target.value);
    //     setPassword(`${event.target.name}: ${event.target.value}`);
    // }

    return (
        <>
            <div className='login-wrapper container text-center justify-center mt-3'>
                <h1>Enter Your Username:</h1>
                <form onSubmit={onSubmit}>
                    <div className='mb-3 col-sm'>
                        <label className='form-label'>Username</label>
                            <input type='username' className='form-control' onChange={handleChange} />
                    </div>
                    <>
                        <button className='btn btn-primary' type='submit' onClick={startQuiz}>Submit</button>
                    </>
                </form>
            </div>
        </>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}