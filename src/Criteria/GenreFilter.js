

const GenreFilter = (props) => {

    return (
        <div className="genreFilter">
            <input type="search" onChange={(e) => props.filterGenres (e.target.value) }>

            </input>
        </div>
    )
};

export default GenreFilter