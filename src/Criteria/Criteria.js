import Genres from './Genres'

const Criteria = (props) => {
    return (
        
        <div className="criteria">
            <h2>Criteria</h2>
            <Genres 
            genres={props.genres}
            selectGenre={props.selectGenre}
            removeGenre={props.removeGenre}
            />
        </div>
    )
};

export default Criteria