async function getRecommendations(seedTracks, selectedGenres) {
    
    let artistsStr = '';
    let genresStr = '';
    let tracksStr = '';
    let space = '%2C'
    let trackSpace = '%2C%20';

    const usedTracks = seedTracks.filter((track) => {
        if (track) {
            return true;
        }
    });

    for (let i = 0; i < usedTracks.length; i ++) {
        artistsStr = artistsStr.concat(usedTracks[i].artists[0].id);
        tracksStr = tracksStr.concat(usedTracks[i].id);
        if (i < usedTracks.length - 1) {
            artistsStr = artistsStr.concat(space);
            tracksStr = tracksStr.concat(trackSpace);
        };
    };

    for (let i = 0; i < selectedGenres.length; i ++) {
        genresStr = genresStr.concat(selectedGenres[i].name);
        if (i < selectedGenres.length - 1) {
            genresStr = genresStr.concat(space);
        };
    };

    console.log (tracksStr)

    const response = await fetch(`/api/recommendations?artists=${artistsStr}&genres=${genresStr}&tracks=${tracksStr}`);
    const json = await response.json();
    console.log (json)
};

export default getRecommendations;