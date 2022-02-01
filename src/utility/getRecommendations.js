async function getRecommendations(seedTrack0, seedTrack1, seedTrack2, selectedGenres, popularity, popularityChecked, energy, energyChecked, tempo, tempoChecked) {
    
    let artistsStr = '';
    let genresStr = '';
    let tracksStr = '';
    let comma = ','
    
    let seedTracks = [seedTrack0, seedTrack1, seedTrack2];

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

    let popularityAdjusted = '';
    let energyAdjusted = '';
    let tempoAdjusted = '';

    if (popularityChecked) {
        popularityAdjusted = popularity;
    }

    if (energyChecked) {
        energyAdjusted = (energy / 100).toFixed(1);
    }
    
    if (tempoChecked) {
        tempoAdjusted = tempo;
    }
    
    const response = await fetch(`/api/recommendations?artists=${artistsStr}&genres=${genresStr}&tracks=${tracksStr}&popularity=${popularityAdjusted}&energy=${energyAdjusted}&tempo=${tempoAdjusted}`);
    const json = await response.json();
    return (json)
};

export default getRecommendations;