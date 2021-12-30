import Genres from './Genres'
import RangeSlider from './RangeSlider';

const Criteria = (props) => {
    return (
        
        <div className="criteria">
            <div className="criteriaHeader">
                <h2>Criteria</h2>
            </div>
            <Genres 
            genres={props.genres}
            selectedGenres={props.selectedGenres}
            selectGenre={props.selectGenre}
            removeGenre={props.removeGenre}
            filterGenres={props.filterGenres}
            />
            <RangeSlider 
            parameter="energy"
            min={0}
            max={100}
            />
        </div>
    )
};

export default Criteria