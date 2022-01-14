import { useState, useRef } from 'react';
import GenreTile from './GenreTile'
import GenreFilter from './GenreFilter';

const Genres = (props) => {

    const [showAll, setShowAll] = useState(false);
    
    const getStyle = () => {
        let style = {};
            // mobile breakpoint
        if (window.innerWidth < 768) {
            style = {
                height: '1rem'
            }
            // 768 breakpoint
        } else if ((window.innerWidth >= 768) && (window.innerWidth < 1024)) {
            style = {
                height: '15rem'
            }
            // 1024+ 
        } else {
            style = {
                height: '10rem'
            }
        }
        return style;
        //return style;
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
            <ul className="genres" style={getStyle()}>
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
        {/* {showAll ? 
            <button onClick={handleClick} style={props.genres ? {display: 'block'} : {display: 'none'}}>Show less -</button> 
            : 
            <button onClick={handleClick} style={props.genres ? {display: 'block'} : {display: 'none'}}>Show all +</button>}
        <div className='spacer'> </div> */}
    </div>
    );
};

//style={showAll ? getStyling().showAll : getStyling().showLess}>

export default Genres