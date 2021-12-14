'use strict'

let nuberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: nuberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for (let i = 0; i < 2; i++) {
    const a = +prompt('Один из последних просмотренных фильмов?', '23'),
          b = +prompt('Оцените его по пятибальной шкале!', '5');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

// let i = 0;

// while (i < 2) {
//     const a = +prompt('Один из последних просмотренных фильмов?', '23'),
//           b = +prompt('Оцените его по пятибальной шкале!', '5');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++
//     } else {
//         i--;
//     }
// }

// let i = 0;

// do {
//     const a = +prompt('Один из последних просмотренных фильмов?', '23'),
//           b = +prompt('Оцените его по пятибальной шкале!', '5');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++
//     } else {
//         i--;
//     }
// } 
// while (i < 2)


if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log('мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('норм');
} else if (personalMovieDB.count >= 30) {
    console.log('киноман');
} else {
    console.log('ошибка');
}

console.log(personalMovieDB);

