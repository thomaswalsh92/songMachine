import React, { useState } from 'react';
import GenreTile from './GenreTile'
import GenreFilter from './GenreFilter';

// stub test data

const Genres = (props) => {

    const [showAll, setShowAll] = useState(false);

    const showLessStyle = {
        maxHeight: '150px',
        overflowY: 'scroll'
    };

    const showAllStyle = {
        maxHeight: '300px',
        overflowY: 'auto'
    };

    const handleClick = () => {
        console.log (showAll)
        if (showAll) {
            setShowAll (false)
        } else {
            setShowAll (true)
        }
    }

    return (
        
    <div className="genreContainer" >
        {<GenreFilter 
        filterGenres={props.filterGenres}
        />}
        {props.genres? 
            (
            <ul className="genres" style={showAll ? showAllStyle : showLessStyle}>
                
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
                            );
                        };
                    })}
                    {props.genres.map((genre, x) => {
                        if (!genre.isSelected && genre.isFiltered) {
                            return (
                                <GenreTile
                                key={x}
                                genre={genre}
                                selectGenre={props.selectGenre}
                                isClicked={false}
                                />
                            );
                        };
                    })}
                </div>
            </ul>
        ) : (
            <div className="genres">
                <p>Loading...</p>
            </div>
            )}
        {showAll ? <button onClick={handleClick}>Show less</button> : <button onClick={handleClick}>Show all</button>}
    </div>
    )
}

export default Genres