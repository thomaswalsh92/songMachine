import GenreTile from './GenreTile'

// stub test data
const testData = ['acoustic',          'afrobeat',       'alt-rock',
'alternative',       'ambient',        'anime',
'black-metal',       'bluegrass',      'blues',
'bossanova',         'brazil',         'breakbeat',
'british',           'cantopop',       'chicago-house',
'children',          'chill',          'classical',
'club',              'comedy',         'country',
'dance',             'dancehall',      'death-metal',
'deep-house',        'detroit-techno', 'disco',
'disney',            'drum-and-bass',  'dub',
'dubstep',           'edm',            'electro',
'electronic',        'emo',            'folk',
'forro',             'french',         'funk',
'garage',            'german',         'gospel',
'goth',              'grindcore',      'groove',
'grunge',            'guitar',         'happy',
'hard-rock',         'hardcore',       'hardstyle',
'heavy-metal',       'hip-hop',        'holidays',
'honky-tonk',        'house',          'idm',
'indian',            'indie',          'indie-pop',
'industrial',        'iranian',        'j-dance',
'j-idol',            'j-pop',          'j-rock',
'jazz',              'k-pop',          'kids',
'latin',             'latino',         'malay',
'mandopop',          'metal',          'metal-misc',
'metalcore',         'minimal-techno', 'movies',
'mpb',               'new-age',        'new-release',
'opera',             'pagode',         'party',
'philippines-opm',   'piano',          'pop',
'pop-film',          'post-dubstep',   'power-pop',
'progressive-house', 'psych-rock',     'punk',
'punk-rock',         'r-n-b',          'rainy-day',
'reggae',            'reggaeton',      'road-trip',
'rock']

const Genres = (props) => {
    return (
        
        <div className="genres">
            {testData.map((genre, x) => (
            <GenreTile 
            key={x} 
            genreName={genre}
             />))} 
        </div>
    )
};

export default Genres