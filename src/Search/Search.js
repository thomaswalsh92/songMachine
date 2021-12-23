import { useRef } from 'react';
import TrackTile from '../TrackTile/TrackTile'

const Search = (props) => {

    const input = useRef();

    const handleSubmit = () => {
        props.searchTracks(input.current.value); 
    };

    const handleClose = () => {
        props.closeSearch();
    };

    return ( 
        <div className="search">
            <input ref={input} className="searchInput" type="text" placeholder="Search.." name="search" autoComplete="off"/>
            <button className="searchSubmit" onClick={handleSubmit}>Submit</button>
            <button className="searchClose" onClick={handleClose}>Close</button>
            {props.searchedTracks[0] ? 
                <ul className="searchResults">
                {props.searchedTracks.map((track, x) => {
                    return <TrackTile 
                    key={x}
                    track={track}
                    trackName={track.name}
                    artist={track.artists[0].name}
                    album={track.album.name}
                    artURL={track.album.images[2].url}
                    isSeed={false}
                    isSelected={false}
                    selectTrack={props.selectTrack}
                    />
                })}
                </ul>
                : 
                <p>Search for tracks!</p>}    
        </div>
        )
};

export default Search;