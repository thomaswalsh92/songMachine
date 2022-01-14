//!COMPONENT NOT CURRENTLY USED IN BUILD!

const SuggestedTrack = (props) => {

    return (
        <div className="suggestedTrack">
            {props.trackSuggested ? 
                <div className="suggestedTrackContainer">
                    <div className="suggestedTrackAlbumArtContainer">
                        <img className="albumArt" src={props.artURL}/>
                    </div>
                    <div className="suggestedTrackMetadata">
                        <p>Track: {props.trackName}</p>
                        <p>Artist: {props.artist}</p>
                        <p>Album: {props.album}</p>
                    </div>
                </div>
            :   
                <div className="suggestedTrackContainer">
                    <div className="suggestedTrackAlbumArtPlaceholder">
                    </div>
                    <div className="suggestedTrackMetadataPlaceholder">
                    </div>
                </div>
            }
        </div>    
    )
};

export default SuggestedTrack;