import GenreTile from './GenreTile'

// stub test data

const Genres = (props) => {
    return (
        
    <div className="genreContainer">
        {props.genres ? 
            (
            <ul className="genres">
                {props.genres.map((genre, x) => (
                <GenreTile 
                key={x} 
                genreName={genre}
                />))} 
            </ul>
        ) : (
            <div className="genres">
                <p>Loading...</p>
            </div>
            )}
    </div>
    )
};

export default Genres