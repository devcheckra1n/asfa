import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/playlists`)
      .then(response => setPlaylists(response.data))
      .catch(error => console.error('Error fetching playlists:', error));
  }, []);

  return (
    <div className="playlists">
      <h2>Your Playlists</h2>
      {playlists.map(playlist => (
        <div key={playlist._id}>
          <h3>{playlist.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
