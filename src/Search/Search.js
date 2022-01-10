import { useRef } from 'react';
import TrackTile from '../TrackTile/TrackTile'

const Search = (props) => {

    const input = useRef();
    const modal = useRef();

    if (modal.current) {
        if (props.userSearching.searchingNow) {
            modal.current.style.display = 'block'
        } else {
            modal.current.style.display = 'none'
        }
    };
    

    const handleSubmit = () => {
        props.searchTracks(input.current.value); 
    };

    const handleClose = () => {
        props.closeSearch();
    };

    return ( 
        <div className="modalBG" ref={modal}>
            <div className="search">
                <div className="searchControls">
                    <input ref={input} className="searchInput" type="text" name="search" autoComplete="off"/>
                    <button className="searchSubmit" onClick={handleSubmit}>Search</button>
                    <button className="searchClose" onClick={handleClose}>Close</button>
                </div>
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
                    null
                    }   
                <div className="searchInfoContainer">
                    <div className="searchInfo">
                    <p>Search for tracks</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
};

{/* < v*/}

export default Search;