import React, { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import YouTubeLogo from './assets/logo.png'; 
function App() {
  const [videos, setVideos] = useState([
    { title: 'Video 1', url: 'https://youtu.be/WzF2MOvWcsY?si=GHk7tV74FFRRKBza' },
    { title: 'Video 2', url: 'https://www.youtube.com/watch?v=1wZoGFF_oi4&list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK' },
    { title: 'Video 3', url: 'https://www.youtube.com/watch?v=IYvD9oBCuJI&list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK&index=2' },
    { title: 'Video 4', url: 'https://www.youtube.com/watch?v=0c6znExIqRw&list=PLZlA0Gpn_vH-aEDXnaFNLsqiJWFpIWV03' },
    { title: 'Video 5', url: 'https://www.youtube.com/watch?v=j3j8St50fNY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=38' },
    { title: 'Video 6', url: 'https://www.youtube.com/watch?v=lAW1Jmmr9hc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=45' },
    { title: 'Video 7', url: 'https://www.youtube.com/watch?v=LDB4uaJ87e0' },
    { title: 'Video 8', url: 'https://www.youtube.com/watch?v=53H_fYlikHc' },
    { title: 'Video 9', url: 'https://www.youtube.com/watch?v=LlvBzyy-558' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <header>
        <img
          src={YouTubeLogo} 
          alt="YouTube Logo"
          className="youtube-logo"
        />
      </header>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="video-grid">
        {filteredVideos.map((video, index) => (
          <div key={index} className="video-card">
            <ReactPlayer url={video.url} controls width="400px" height="225px" />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
