import GenreTile from './GenreTile'
import GenreFilter from './GenreFilter';

// stub test data

const Genres = (props) => {

    return (
        
    <div className="genreContainer">
        {props.genres? 
            (
            <ul className="genres">
                {<GenreFilter 
                filterGenres={props.filterGenres}
                />}
                <div className="genreTilesContainer">
                    {props.selectedGenres.map((genre, x) => {
                        if (genre.isSelected) {
                            return (
                                <GenreTile
                                key={x}
                                genre={genre}
                                removeGenre={props.removeGenre}
                                isClicked={true}
                                />
                            )
                        }
                    })}
                    {props.genres.map((genre, x) => {
                        if (!genre.isSelected) {
                            return (
                                <GenreTile
                                key={x}
                                genre={genre}
                                selectGenre={props.selectGenre}
                                isClicked={false}
                                />
                            )
                        }
                    })}
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