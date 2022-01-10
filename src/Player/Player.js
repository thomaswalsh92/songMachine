import { useState, useEffect } from "react";
import WebPlayback from "../WebPlayback";
import Login from "../Login";

const Player = (props) => {

    const [trackId, setTrackId] = useState(undefined)

    useEffect(() => {
        if (props.suggestedTrack) {
            setTrackId(props.suggestedTrack.tracks[0].id)
        }
        
    }, [props.suggestedTrack])


    return (
    
        <div className="player">
            {props.token === '' ? <Login/> : <WebPlayback token={props.token} />} 
            {trackId ? 
                <iframe src={`https://open.spotify.com/embed/track/${trackId}`} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"> </iframe> 
                :
                (props.token) === '' ? null : <p>Select a genre or seed track to start finding new music!</p>
            }
        </div>
    )
};

export default Player;