import {
    UPDATE_MOVIE_LIST,
    INSERT_TO_RATING_LIST,
    UPDATE_RATING_LIST,
    UPDATE_FAV_MOVIE_LIST,
    UPDATE_FILTERED_FAV_MOVIE_LIST
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

