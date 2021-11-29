import GenreTile from './GenreTile'

// stub test data

const Genres = (props) => {
    return (
        
    <div className="genreContainer">
        {props.genres? 
            (
            <ul className="genres">
                {props.selectedGenres.map((genre, x) => (
                <GenreTile
                key={x}
                genreName={genre}
                removeGenre={props.removeGenre}
                isClicked={true}
                />))}
                {props.genres.map((genre, x) => (
                <GenreTile 
                key={x} 
                genreName={genre}
                selectGenre={props.selectGenre}
                isClicked={false}
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