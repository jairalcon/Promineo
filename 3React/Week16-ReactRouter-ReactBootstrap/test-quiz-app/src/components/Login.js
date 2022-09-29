import React, { useState } from 'react';
import { usersAPI } from '../rest/Endpoint';
import { useNavigate } from 'react-router-dom';

export default function Login({ navigation }) {
    const [ username, setUserName] = useState('');
    // const [ password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit event", event);

        usersAPI.post([username, /*password*/]);
        setUserName("");
        // setPassword("");
        navigate('/quiz');
    };

    function handleChange(event) {
        console.log(" handleChange name", event.target.name);
        console.log("userName handleChange value", event.target.value);
        setUserName(`${event.target.name}${event.target.value}`);
    }

    return (
        <>
            <div className='login-wrapper container text-center justify-center mt-3 row'>
                <h1>Enter Your Username:</h1>
                <form onSubmit={onSubmit}>
                    <div className='mb-3 col-sm'>
                        <label className='form-label'></label>
                            <input type='username' className='form-control' onChange={handleChange} />
                    </div>
                    <>
                        <button className='btn btn-primary' type='submit' onClick={() => navigation.navigate('quiz')}>Submit</button>
                    </>
                </form>
            </div>
        </>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

      // const [ token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }