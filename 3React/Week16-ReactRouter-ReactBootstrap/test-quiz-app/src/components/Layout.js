// import { useState, useCallback } from "react"
// import {
//     Routes,
//     Route
// } from "react-router-dom";
// import MusicPlayer from "./MusicPlayer";
// import MusicList from "./MusicList";

// const Layout = () => {
//     const [currentPlaying, setCurrentPlaying] = useState(0)

//     const updateMusic = (state) => {
//         setCurrentPlaying(state)
//     }
//     const updateMusicCallback = useCallback(updateMusic, []);
//     return (
//         <>
//             <MusicPlayer currentPlaying={currentPlaying} />
//             <Routes>
//                 <Route path="/" element={<MusicList updateMusic={updateMusicCallback} />} />
//             </Routes>
//         </>
//     )
// }

// export default Layout