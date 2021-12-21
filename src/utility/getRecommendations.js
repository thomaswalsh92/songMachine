async function getRecommendations() {
    const response = await fetch('/api/recommendations');
    const json = await response.json();
    //await console.log ('getGenres is being called', json.genres);
    console.log (json)
};


export default getRecommendations;
