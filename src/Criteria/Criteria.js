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
            parameter="popularity"
            min={0}
            max={100}
            start={50}
            unit={'%'}
            criteria={props.popularity}
            updateCriteria={props.updatePopularity}
            criteriaChecked={props.popularityChecked}
            updateCriteriaChecked={props.updatePopularityChecked}
            />
            <RangeSlider 
            parameter="energy"
            min={0}
            max={100}
            start={50}
            unit={'%'}
            criteria={props.energy}
            updateCriteria={props.updateEnergy}
            criteriaChecked={props.energyChecked}
            updateCriteriaChecked={props.updateEnergyChecked}
            />
            <RangeSlider
            parameter="tempo"
            min={50}
            max={250}
            start={150}
            unit={'BPM'}
            criteria={props.tempo}
            updateCriteria={props.updateTempo}
            criteriaChecked={props.tempoChecked}
            updateCriteriaChecked={props.updateTempoChecked}
            />
        </div>
    )
};

export default Criteria