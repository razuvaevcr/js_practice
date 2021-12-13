'use strict'

let nuberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: nuberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '23'),
    b = prompt('Оцените его по пятибальной шкале!', '5'),
    c = prompt('Один из последних просмотренных фильмов?', '23'),
    d = prompt('Оцените его по пятибальной шкале!', '5');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
