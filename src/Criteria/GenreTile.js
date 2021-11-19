import { useState } from "react/cjs/react.development";



const GenreTile = (props) => {
    
    const isClickedStyle = {
        backgroundColor: '#53D8FB'
    }

    const isNotClickedStyle = {
        backgroundColor: '#ececec'
    }
    let [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }
    }

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

export default GenreTile