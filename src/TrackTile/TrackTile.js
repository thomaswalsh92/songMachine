import add from '../images/add.svg'
import trash from '../images/trash.svg'

//Track tiles rendering dependent on the props passed down
//from the parent component to allow reusability across 
//multiple parent types (e.g. seed section, search section and
//suggestion section.

//isSeed = true means the trackTile is in the seed section,
//false means a searched track.

//isSelected only applies to seed tracks, which can be selected
//or awaiting selection when in seed section.

const TrackTile = (props) => {

    const handleSeedAdd = () => {
        props.openSearch(props.index);
    };

    const handleSeedDelete = () => {
        props.deleteTrack(props.index)
    }

    const handleSearchAdd = () => { 
        props.selectTrack(props.track);
    };
    

    return (
        <li className="trackTile">
            <div className="trackImageContainer">
                {(props.isSeed && !props.isSelected) ? 
                    <div className="albumArtPlaceholder"></div>
                : 
                    <img className="albumArt" src={props.artURL}/>}
            </div>
            <div className="trackMetadataContainer">
                {(props.isSeed && !props.isSelected) ?
                    <div className="trackMetadataUnselected">
                        <p>Add a seed</p>
                    </div>
                : 
                    <div className="trackMetadataSelected">
                        <p>Track: {props.trackName}</p>
                        <p>Artist: {props.artist}</p>
                        <p>Album: {props.album}</p>
                    </div>
                }  
            </div>
            <div className="trackAction">
                {!props.isSelected ? 
                    <img 
                    className="trackAdd" 
                    src={add} 
                    onClick={props.isSeed ? handleSeedAdd : handleSearchAdd}
                    />
                :   
                    <img 
                    className="trackDelete" 
                    src={trash} 
                    onClick={handleSeedDelete}
                    />
                }
            </div>
        </li>
    );
};

export default TrackTile;