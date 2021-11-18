import Genres from './Genres'

const Criteria = (props) => {
    return (
        
        <div className="criteria">
            <h2>Criteria</h2>
            <Genres 
            genres={props.genres}
            />
        </div>
    )
};

export default Criteria