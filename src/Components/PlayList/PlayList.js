import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList.js';

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <TrackList /> */}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}


export default PlayList;