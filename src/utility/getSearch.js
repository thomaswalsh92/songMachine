
async function getSearch(string) {
    
    if (string) {
        const response = await fetch('/api/search?string=' + string);
        const json = await response.json();
        return (json.tracks.items);
    };  
};


export default getSearch;