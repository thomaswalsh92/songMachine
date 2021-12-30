async function getRecommendations(seedTracks, selectedGenres) {
    
    let artistsStr = '';
    let genresStr = '';
    let tracksStr = '';
    let comma = ','

    const usedTracks = seedTracks.filter((track) => {
        if (track) {
            return true;
        }
    });

    for (let i = 0; i < usedTracks.length; i ++) {
        artistsStr = artistsStr.concat(usedTracks[i].artists[0].id);
        tracksStr = tracksStr.concat(usedTracks[i].id);
        if (i < usedTracks.length - 1) {
            artistsStr = artistsStr.concat(comma);
            tracksStr = tracksStr.concat(comma);
        };
    };

    for (let i = 0; i < selectedGenres.length; i ++) {
        genresStr = genresStr.concat(selectedGenres[i].name);
        if (i < selectedGenres.length - 1) {
            genresStr = genresStr.concat(comma);
        };
    };

    const response = await fetch(`/api/recommendations?artists=${artistsStr}&genres=${genresStr}&tracks=${tracksStr}`);
    const json = await response.json();
    return (json)
};

export default getRecommendations;