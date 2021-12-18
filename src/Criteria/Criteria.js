import Genres from './Genres'

const Criteria = (props) => {
    return (
        
        <div className="criteria">
            <h2>Criteria</h2>
            <Genres 
            genres={props.genres}
            selectedGenres={props.selectedGenres}
            selectGenre={props.selectGenre}
            removeGenre={props.removeGenre}
            filterGenres={props.filterGenres}
            />
        </div>
    )
};

export default Criteria