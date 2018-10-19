import React from 'react';
import PlaylistCard from './PlaylistCard'
const Music = () => {
    return(
        <div className="page">
            <section>
                <h1>Music</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates, earum culpa odio.</p>
                <ul className="playlists">
                    <PlaylistCard/>
                    <PlaylistCard/>
                    <PlaylistCard/>
                    <PlaylistCard/>
                    <PlaylistCard/>
                    <PlaylistCard/>
                </ul>
            </section>
        </div>   
    )
}

export default Music;