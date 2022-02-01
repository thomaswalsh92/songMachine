import { useRef } from 'react';
import ReactDom from 'react-dom';
import TrackTile from '../TrackTile/TrackTile'

const Search = (props) => {

    const input = useRef();
    const searchBg = useRef();
    const search = useRef();
    const searchInfo = useRef();

    let width = window.innerWidth;

    if (searchBg.current) {
        if (props.userSearching) {
            if (width < 1024) {
                searchBg.current.style.display = 'block'
                search.current.style.display = 'block'
            } else {
                searchBg.current.style.display = 'flex'
                search.current.style.display = 'block'
            }
            
            
        } else {
            searchBg.current.style.display = 'none'
            search.current.style.display = 'none'
        };
    };
    
    if (searchBg.current) {
        if (props.searchedTracks[0]) {
            searchInfo.current.style.display = 'none'
        } else {
            searchInfo.current.style.display = 'flex'
        }
    }
    

    const handleSubmit = () => {
        const exceptionContent = 'Enter something in the search field to find tracks.'

        if (input.current.value) {
            props.searchTracks(input.current.value); 
        } else {
            props.handleException(exceptionContent);
        }
    };

    const handleClose = () => {
        props.closeSearch();
    };

    console.log (props.searchedTracks)

    return ReactDom.createPortal( 
        <>
            <div className="searchBg" ref={searchBg}>
                <div className="search" ref={search}>
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
                            listenURL={track.external_urls.spotify}
                            isSeed={false}
                            isSelected={false}
                            isSearched={true}
                            selectTrack={props.selectTrack}
                            />
                        })}
                        </ul>
                        : 
                        null
                        }   
                    <div className="searchInfoContainer" ref={searchInfo}>
                        <div className="searchInfo">
                        <p>Search for tracks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('search')
    ) 
};

export default Search;