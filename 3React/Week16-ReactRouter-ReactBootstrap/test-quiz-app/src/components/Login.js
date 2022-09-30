import React from 'react';
// import { usersAPI } from '../rest/Endpoint';
import { useNavigate } from 'react-router-dom';
import redbull from './assets/redbull.jpg';
import ferrari from './assets/ferrari.jpg';
import mercedes from './assets/mercedes.jpg';
import alpine from './assets/alpine.jpg';
import mclaren from './assets/mclaren.jpg';
import alfaromeo from './assets/alfaromeo.png';
import haas from './assets/haas.jpg';
import alphatauri from './assets/alphatauri.jpg';
import astonmartin from './assets/astonmartin.jpg';
import williams from './assets/williams.jpg';

export default function Login({ navigation }) {
    // const [ username, setUserName] = useState('');
    // const [ password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit event", event);

        // usersAPI.post([username, /*password*/]);
        // setUserName("");
        // setPassword("");
        navigate('/quiz');
    };

    // function handleChange(event) {
    //     console.log(" handleChange name", event.target.name);
    //     console.log("userName handleChange value", event.target.value);
    //     setUserName(`${event.target.name}${event.target.value}`);
    // }

    return (
        <>
            <div className='container row d-flex aligns-items-center justify-content-center'>
                <div className='mt-3 text-center'>
                    <h1>Welcome to my F1 quiz.<br></br>Press below to begin:</h1>
                    <form onSubmit={onSubmit}>
                        {/* <div className='mb-3 col-sm'>
                            <label className='form-label'></label>
                                <input
                                    placeholder='Username...' 
                                    type='username' 
                                    className='form-control' 
                                    onChange={handleChange} />
                        </div> */}
                        <>
                            <button className='btn btn-success' type='submit' onClick={() => navigation.navigate('quiz')}>"It's lights out and away we go!" (Begin Quiz)</button>
                        </>
                    </form>
                </div>
            </div>
            <div className="container row mt-3 align-center m-3 p-3">
                <img className='col-sm team-logo rounded' src={redbull} alt="red bull" />
                <img className='col-sm team-logo rounded' src={ferrari} alt="ferrari" />
                <img className='col-sm team-logo rounded' src={mercedes} alt="mercedes" />
                <img className='col-sm team-logo rounded' src={alpine} alt="alpine" />
                <img className='col-sm team-logo rounded' src={mclaren} alt="mclaren" />
                <img className='col-sm team-logo rounded' src={alfaromeo} alt="alfaromeo" />
                <img className='col-sm team-logo rounded' src={haas} alt="haas" />
                <img className='col-sm team-logo rounded' src={alphatauri} alt="alpha tauri" />
                <img className='col-sm team-logo rounded' src={astonmartin} alt="aston martin" />
                <img className='col-sm team-logo rounded' src={williams} alt="williams" />
            </div>
        </>
    )
}