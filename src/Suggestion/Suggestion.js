import SuggestedTrack from "./SuggestedTrack";
import Player from "../Player/Player";

const Suggestion = (props) => {

    const handleClick = () => {
        if (props.selectedGenres[0] || props.seedTracks[0]) {
            props.generateSuggestions();
        }
        
    };
    
    return (
        
        <div className="suggestion">
            <Player 
            suggestedTrack={props.suggestedTrack}
            token={props.token}
            />
            <button className="suggestButton" onClick={handleClick}><p>Suggest</p></button>
        </div>
    )
};

export default Suggestion;