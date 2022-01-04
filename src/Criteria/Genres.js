import React, { useState } from 'react';
import GenreTile from './GenreTile'
import GenreFilter from './GenreFilter';

// stub test data

const Genres = (props) => {

    const [showAll, setShowAll] = useState(false);

    const showLessStyle = {
        maxHeight: '5rem',
        overflowY: 'scroll'
    };

    const showAllStyle = {
        maxHeight: '1000px',
        overflowY: 'auto'
    };

    const handleClick = () => {
        showAll ? setShowAll (false) : setShowAll (true);
    };

    return (
        
    <div className="genreContainer" >
        <div className="genreHeader">
            <h3>GENRES</h3>
        </div>
        {/* {<GenreFilter 
        filterGenres={props.filterGenres}
        />} */}
        {props.genres? 
            (
            <ul className="genres" style={showAll ? showAllStyle : showLessStyle}>  
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
            </ul>
        ) : (
            <div className="genres">
                <p>Loading...</p>
            </div>
            )}
        {showAll ? <button onClick={handleClick}>Show less -</button> : <button onClick={handleClick}>Show all +</button>}
        <div className='spacer'> </div>
    </div>
    );
};

export default Genres