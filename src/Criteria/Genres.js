import GenreTile from './GenreTile'
import GenreFilter from './GenreFilter';

// stub test data

const Genres = (props) => {

    return (
        
    <div className="genreContainer">
        {props.genres? 
            (
            <ul className="genres">
                <GenreFilter 
                filterGenres={props.filterGenres}
                />
                <div className="genreTilesContainer">
                    {props.selectedGenres.map((genre, x) => (
                    <GenreTile
                    key={x}
                    genreName={genre}
                    removeGenre={props.removeGenre}
                    isClicked={true}
                    />))}
                    {props.filteredGenres[0] ? 
                        (
                        props.filteredGenres.map((genre, x) => (
                        <GenreTile 
                        key={x} 
                        genreName={genre}
                        selectGenre={props.selectGenre}
                        isClicked={false}
                        />))
                        ) : (
                        props.genres.map((genre, x) => (
                        <GenreTile 
                        key={x} 
                        genreName={genre}
                        selectGenre={props.selectGenre}
                        isClicked={false}
                        />))
                        )
                    }
                </div>
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