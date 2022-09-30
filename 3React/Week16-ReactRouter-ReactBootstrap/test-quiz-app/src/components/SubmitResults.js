import React, { useState } from 'react';
import { usersAPI } from '../rest/Endpoint';
import { useNavigate } from 'react-router-dom';

export default function SubmitResults({ navigation }) {
    const [ username, setUserName ] = useState('');
    const [ result, setResult ] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit event", event);

        usersAPI.post([username, result]);
        setUserName("");
        setResult("");
        navigate('/leaderboard');
    };

    function handleChange(event) {
        console.log(" handleChange name", event.target.name);
        console.log("userName handleChange value", event.target.value);
        setUserName(`${event.target.name}${event.target.value}`);
    }

    return (
        <>
            <div className='container row d-flex aligns-items-center justify-content-center'>
                <div className='mt-3 text-center'>
                    <h3 className='font-face-f1b'>Enter Your Username Below</h3>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3 col-sm font-face-f1r'>
                            <label className='form-label'></label>
                            <input
                                placeholder='Username...'
                                type='username'
                                className='form-control'
                                onChange={handleChange} />
                        </div>
                        <>
                            <button className='btn btn-success font-face-f1r' type='submit' onClick={() => navigation.navigate('quiz')}>Submit</button>
                        </>
                    </form>
                </div>
            </div>
        </>
    )
}