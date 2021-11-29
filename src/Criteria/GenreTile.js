import { useState } from "react/cjs/react.development";



const GenreTile = (props) => {
    
    const isClickedStyle = {
        backgroundColor: '#53D8FB'
    };

    const isNotClickedStyle = {
        backgroundColor: '#ececec'
    };


    const handleClick = () => {
        if (!props.isClicked) {
            props.selectGenre(props.genreName)
        } else {
            props.removeGenre(props.genreName)
        };
    };

    return (
        <li className="genreTile" 
        id={props.genreName}
        onClick={handleClick}
        style={props.isClicked ?  isClickedStyle : isNotClickedStyle}
        >
            <p>{props.genreName}</p>
        </li>
        )
    };  

export default GenreTile;
