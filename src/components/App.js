import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MediaPlayer from './components/MediaPlayer';
import Playlists from './components/Playlists';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/playlists" component={Playlists} />
          <Route path="/" component={MediaPlayer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
