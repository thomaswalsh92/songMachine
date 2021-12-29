import TrackTile from "../TrackTile/TrackTile";

const Suggestion = (props) => {

    let track = undefined;
    props.suggestedTrack ? track = props.suggestedTrack.tracks[0] : track = undefined;

    const handleClick = () => {
        props.generateSuggestions();
    };
    
    return (
        
        <div className="suggestion">
            <button onClick={handleClick}>Suggest</button>
            <ul>
                {props.suggestedTrack ? 
                    <TrackTile 
                    trackName={track.name}
                    artist={track.artists[0].name}
                    album={track.album.name}
                    artURL={track.album.images[2].url}
                    isSeed={false}
                    isSelected={false}
                    deleteTrack={props.deleteTrack}
                    /> 
                : 
                    <li>Hit generate track to find suggestions</li>}
            </ul>
        </div>
    )
};

export default Suggestion;