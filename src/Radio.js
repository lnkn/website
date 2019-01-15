import React from 'react';
import PlaylistCard from './PlaylistCard'
import daniel from './assets/Artboard 3-80.jpg'
const Music = () => {
    return(
        <div className="page radio">
                <h1>Radio</h1>
                <h3>FEATURED</h3>
                <div className="radio__featured">
                    <div className="radio__featured_img">
                        <img src={daniel} alt="featured playlist"></img>
                    </div>
                    <div className="radio__featured_playlist">
                        <iframe src="https://open.spotify.com/embed/user/121432316/playlist/2KuDatRigir4JAJZxY1tQn"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                        title="playlist">
                        </iframe>
                    </div>
              </div>

                <ul className="playlists">
                    <PlaylistCard cover={daniel}/>
                    
                    <PlaylistCard/>
                    <PlaylistCard/>
                    <PlaylistCard/>
                </ul>
        </div>   
    )
}

export default Music;