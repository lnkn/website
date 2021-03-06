import React from 'react';
import daniel from './assets/Artboard 3-80.jpg'
const PlaylistCard = () => {
    return(
       
           <div className="radio__featured">
                    <div className="radio__featured_img">
                        <img src={daniel} alt="featured playlist"></img>
                    </div>
                    <div className="radio__featured_playlist">
                        <iframe src="https://open.spotify.com/embed/user/121432316/playlist/4EAfSQMiBPY2dYHFqL3S72"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                        title="playlist">
                        </iframe>
                    </div>
              </div>
        
    )
}

export default PlaylistCard;