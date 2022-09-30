import React from 'react'
import BackgroundMusic from './assets/F1.mp3';
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer = () => {
    
    return (
        <>
            <ReactAudioPlayer src={BackgroundMusic} controls/>
        </>
    )
}

export default MusicPlayer;

// https://www.npmjs.com/package/react-audio-player