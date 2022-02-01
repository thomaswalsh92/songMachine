import TrackTile from '../TrackTile/TrackTile'

const Seeds = (props) => {

    const seedTracks = [props.seedTrack0, props.seedTrack1, props.seedTrack2]
    return (
        
        <div className="seeds">
            <div className="seedsHeader">
                <h2>Seed Tracks</h2>
            </div>
            <ul className="seedsContainer">
                {seedTracks.map((track, x) => {
                    if (track) {
                        return (
                        <TrackTile 
                        key={x}
                        index={x}
                        trackName={track.name}
                        artist={track.artists[0].name}
                        album={track.album.name}
                        artURL={track.album.images[2].url}
                        listenURL={track.external_urls.spotify}
                        isSeed={true}
                        isSelected={true}
                        deleteTrack={props.deleteTrack}
                        />
                        );
                        } else 
                        {
                        return (
                        <TrackTile 
                        key={x}
                        index={x}
                        isSeed={true}
                        isSelected={false}
                        openSearch={props.openSearch}
                        />
                        )};
                    }
                )}
            </ul>
        </div>
    );
};

export default Seeds;