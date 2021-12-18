async function getGenres() {
    const response = await fetch('/api/genres');
    const json = await response.json();
    //await console.log ('getGenres is being called', json.genres);
    return json.genres
};

export default getGenres;

