import { useState } from "react/cjs/react.development";



const GenreTile = (props) => {
    
    const isClickedStyle = {
        backgroundColor: '#74BAF5'
    };

    const isNotClickedStyle = {
        backgroundColor: '#ececec'
    };


    const handleClick = () => {
        if (!props.isClicked) {
            props.selectGenre(props.genre)
        } else {
            props.removeGenre(props.genre)
        };
    };

    return (
        <li className="genreTile" 
        id={props.genre.name}
        onClick={handleClick}
        style={props.isClicked ?  isClickedStyle : isNotClickedStyle}
        >
            <span>{props.genre.name}</span>
        </li>
        )
    };  

export default GenreTile;
