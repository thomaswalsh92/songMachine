async function getGenres() {
    const response = await fetch('/api/genres');
    const json = await response.json();
    return json.genres
};

export default getGenres;