const Suggestion = (props) => {

    const handleClick = () => {
        props.generateSuggestions();
    };
    
    return (
        
        <div className="suggestion">
            <button onClick={handleClick}>Suggest</button>
        </div>
    )
};

export default Suggestion;