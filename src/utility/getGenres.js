const getGenres = async () => {
    const response = await fetch('/api/genres');
    return (response)
}

export default getGenres;

