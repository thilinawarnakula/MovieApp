import {
    UPDATE_MOVIE_LIST,
    INSERT_TO_RATING_LIST,
    UPDATE_RATING_LIST,
    UPDATE_FAV_MOVIE_LIST,
    UPDATE_FILTERED_FAV_MOVIE_LIST,
    ADD_FAVOURITE_MOVIE,
    REMOVE_FAVOURITE_MOVIE
} from '../types';


export const updateMovieList= (list) => ({
    type: UPDATE_MOVIE_LIST,
    payload: list
});

export const insertToRatingList= (list) => ({
    type: INSERT_TO_RATING_LIST,
    payload: list
});

export const updateRatingList= (list) => ({
    type: UPDATE_RATING_LIST,
    payload: list
});

export const updateFavouriteMovieList= (list) => ({
    type: UPDATE_FAV_MOVIE_LIST,
    payload: list
});

export const updateFilteredFavouriteMovieList= (list) => ({
    type: UPDATE_FILTERED_FAV_MOVIE_LIST,
    payload: list
});

export const addFavouriteMovie= (list) => ({
    type: ADD_FAVOURITE_MOVIE,
    payload: list
});

export const removeFavouriteMovie= (list) => ({
    type: REMOVE_FAVOURITE_MOVIE,
    payload: list
});

