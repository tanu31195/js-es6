//All movies in 2018 with rating > 4
//Sort them by rating
//Descending order(Higher rated movies at top)
//Pick their title

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
]

console.log(movies
        .filter(movie => movie.year === 2018 && movie.rating >= 4)
        // .sort(movie => movie.rating)
        .sort((a,b) => a.rating - b.rating)
        .reverse()
        .map(movie => movie.title)
);
