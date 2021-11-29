import { useState } from "react/cjs/react.development";



const GenreTile = (props) => {
    
    const isClickedStyle = {
        backgroundColor: '#53D8FB'
    };

    const isNotClickedStyle = {
        backgroundColor: '#ececec'
    };

    let [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true)
            props.selectGenre(props.genreName)
        } else {
            setIsClicked(false)
            props.removeGenre(props.genreName)
        };
    };

    return (
        <li className="genreTile" 
        id={props.genreName}
        onClick={handleClick}
        style={isClicked ?  isClickedStyle : isNotClickedStyle}
        >
            <p>{props.genreName}</p>
        </li>
        )
    };  

export default GenreTile;
