import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const MediaPlayer = () => {
  const [videoId, setVideoId] = useState('');
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch playlists from the backend
    axios.get(`${process.env.REACT_APP_API_URL}/api/playlists`)
      .then(response => setPlaylists(response.data))
      .catch(error => console.error('Error fetching playlists:', error));
  }, []);

  return (
    <div className="media-player">
      <YouTube videoId={videoId} />
      <div>
        {playlists.map(playlist => (
          <div key={playlist._id}>
            <h3>{playlist.name}</h3>
            {playlist.videos.map(video => (
              <button key={video} onClick={() => setVideoId(video)}>
                Play Video
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPlayer;
