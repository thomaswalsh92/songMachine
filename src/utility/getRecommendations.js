async function getRecommendations(seedTracks, selectedGenres, popularity, energy, tempo) {
    
    let artistsStr = '';
    let genresStr = '';
    let tracksStr = '';
    let comma = ','
    let energyAdjusted = null;

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

    energyAdjusted = (popularity / 100).toFixed(1);
    console.log (energyAdjusted)

    const response = await fetch(`/api/recommendations?artists=${artistsStr}&genres=${genresStr}&tracks=${tracksStr}&popularity=${popularity}&energy=${energyAdjusted}&tempo=${tempo}`);
    const json = await response.json();
    console.log (json)
    return (json)
};

export default getRecommendations;