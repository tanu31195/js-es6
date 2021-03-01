const movie = {
    name: 'The Matrix',
    releaseYear: 1999,
    rating: 8.5,
    genre: 'Sci-Fi'
};

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

showProperties(movie);
