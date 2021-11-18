import GenreTile from './GenreTile'

// stub test data

const Genres = (props) => {
    return (
        
    <div className="genreContainer">
        {props.genres ? 
            (
            <div className="loading">
                <p>Loaded</p>
                <div className="genres">
                {props.genres.map((genre, x) => (
                <GenreTile 
                key={x} 
                genreName={genre}
                />))} 
                </div>
            </div>
        ) : (
            <div className="genres">
                <p>Loading...</p>
            </div>
            )}
    </div>
    )
};

export default Genres