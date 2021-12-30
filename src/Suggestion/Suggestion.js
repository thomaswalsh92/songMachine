import SuggestedTrack from "./SuggestedTrack";
import Player from "../Player/Player";
import { useEffect } from "react";

const Suggestion = (props) => {

    console.log (props.suggestedTrack)

    const handleClick = () => {
        props.generateSuggestions();
    };
    
    return (
        
        <div className="suggestion">
            <ul className="suggestedTrack">
                {props.suggestedTrack ? 
                    <SuggestedTrack
                    trackName={props.suggestedTrack.tracks[0].name}
                    artist={props.suggestedTrack.tracks[0].artists[0].name}
                    album={props.suggestedTrack.tracks[0].album.name}
                    artURL={props.suggestedTrack.tracks[0].album.images[2].url}
                    trackSuggested={true}
                    /> 
                : 
                    <SuggestedTrack
                    trackSuggested={false}
                    /> 
                }
            </ul>
            <Player />
            <button className="suggestButton" onClick={handleClick}><p>Suggest</p></button>
        </div>
    )
};

export default Suggestion;