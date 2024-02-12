// Exercise 1: Get the array of all directors.
function getAllDirectors(arr) {
  let result = arr.map((movie) => movie.director);
  console.log('EXERCICE 1:', result);
  return result;
}
// const directors = getAllDirectors(movies);

// renderDirectors(directors);

// function renderDirectors(directors) {
//   document.getElementById('directors').innerHTML = directors.join('</br>');
// }

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(arr, director) {
  return arr.filter((movie) => movie.director === director);
}

// console.log(getMoviesFromDirector(movies, 'Francis Ford Coppola'));

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(arr, director) {
  const filteredByDirector = arr
    .filter((movie) => movie.director === director)
    .map((movie) => movie.score);
  const totalOfScores = filteredByDirector.reduce(
    (average, score) => average + score,
    0
  );
  const averageOfScores = (totalOfScores / filteredByDirector.length).toFixed(
    2
  );
  return averageOfScores;
}

// console.log(moviesAverageOfDirector(movies, 'Francis Ford Coppola'));

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(arr) {
  const sortedAlphabetically = [...arr].sort(function (a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return sortedAlphabetically.map((movie) => movie.title).slice(0, 20);
}

// console.log(orderAlphabetically(movies));

// Exercise 5: Order by year, ascending
function orderByYear(arr) {
  return [...arr].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(str) {
  let moviesScores = 0;
  movies.forEach((movie) => {
    // movie.genre.forEach((ele) => {
    //   if (ele === str) {
    //     moviesScores += movie.score;
    //   }
    // });

    if (movie.genre.includes(str)) {
      moviesScores += movie.score;
    }
  });

  return (moviesScores / movies.length).toFixed(2);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(arr) {
  const moviesInMins = [...arr].map((movie) => {
    const onlyNumbers = movie.duration.match(/\d+/g);
    const hours = onlyNumbers.splice(0, 1) * 60;
    const durationInMinutes = `${parseInt(onlyNumbers) + parseInt(hours)}min`;
    return { ...movie, duration: durationInMinutes };
  });
  return moviesInMins;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(num) {
  const moviesOfYear = movies.filter((movie) => movie.year == num);

  const sortedMovies = [...moviesOfYear].sort(
    (movie1, movie2) => movie2.score - movie1.score
  );

  const highestScoreMovies = sortedMovies.filter(
    (movie) => movie.score === sortedMovies[0].score
  );

  return highestScoreMovies;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
