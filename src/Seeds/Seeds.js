import SeedTrack from './SeedTrack'

const Seeds = (props) => {

    return (
        
        <div className="seeds">
            {props.selectedTracks.map((track, x) => {    
                return (
                    <SeedTrack
                    key={x}
                    track={track}
                    />
                )
            })}
        </div>
    )
};

export default Seeds;