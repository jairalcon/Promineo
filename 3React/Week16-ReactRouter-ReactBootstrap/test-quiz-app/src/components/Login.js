import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { usersAPI } from '../rest/Endpoint';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
    const [ username, setUserName] = useState('');
    const [ password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit event", event);
        console.log("onSubmit event product:", event.target.name);

        usersAPI.post([username, password]);
        setUserName("");
        setPassword("");
    };

    const goQuiz = () => {
        navigate('/quiz')
    }

    function handleChange(event) {
        console.log(" handleChange name", event.target.name);
        console.log("userName handleChange value", event.target.value);
        setUserName(`${event.target.name}: ${event.target.value}`);
    }
    
    function handleChange2(event) {
        console.log(" handleChange name", event.target.name);
        console.log("password handleChange value", event.target.value);
        setPassword(`${event.target.name}: ${event.target.value}`);
    }

    return (
        <>
            <div className='login-wrapper'>
                <h1>Please Log In</h1>
                <form onSubmit={onSubmit}>
                    <label>
                        <p>Username</p>
                        <input type='text' onChange={handleChange} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type='password' onChange={handleChange2} />
                    </label>
                    <>
                    <button type='submit' onClick={goQuiz}>Submit</button>
                    </>
                </form>
            </div>
        </>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}