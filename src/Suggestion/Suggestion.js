import SuggestedTrack from "./SuggestedTrack";
import Player from "../Player/Player";

const Suggestion = (props) => {

    

    const handleClick = () => {
        const exceptionContent = 'Select at least one genre or seed track to find new music.'
        if (props.selectedGenres[0] || props.seedTracks[0]) {
            props.generateSuggestions();
        } else {
            props.handleException(exceptionContent)
        }
    };
    
    return (
        
        <div className="suggestion">
            <Player 
            suggestedTrack={props.suggestedTrack}
            token={props.token}
            />
            <button className="suggestButton" onClick={handleClick}><p>Suggest</p></button>
            <div class="appInfo">
                <p>songMachine is a tool to help you find new music. Simply select one or more genres or seed tracks, hit suggest and songMachine will find related music!</p>
                <br></br>
                <p>You can also tweak certain attributes such as popularity to tailor the suggestions you will receive.</p>
            </div>
        </div>
    )
};

export default Suggestion;