import { useRef } from 'react';

const Search = (props) => {

    const input = useRef();

    const handleClick = () => {
        props.searchTracks(input.current.value); 
    };

    // const mapTracks = async () => {
    //     let trackArr = []
    //     trackArr = await props.searchedTracks.map( element => {
    //     <p>{element.name}</p>
    //     });
    //     return trackArr;
    // };

    return ( 
        <div className="search-container">
            <input ref={input} className="search" type="text" placeholder="Search.." name="search" autoComplete="off"/>
            <button className="searchSubmit" onClick={handleClick}>Submit</button>
            <ul>
                {props.searchedTracks ? props.searchedTracks.map (element => <li>{element.name}</li>) : <p>Search for tracks!</p>}    
            </ul>
        </div>
        )
};

export default Search;