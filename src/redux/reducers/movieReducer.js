import {
    UPDATE_MOVIE_LIST,
    INSERT_TO_RATING_LIST,
    UPDATE_RATING_LIST,
    UPDATE_FAV_MOVIE_LIST,
    UPDATE_FILTERED_FAV_MOVIE_LIST,
    ADD_FAVOURITE_MOVIE,
    REMOVE_FAVOURITE_MOVIE
} from '../types';

const INITIAL_STATE = {
    movieList : [],
    ratingMovieList: [],
    favouriteMovieList:[],
    filltedFavouriteMovieList:[],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_MOVIE_LIST:
            return {
                ...state,
                movieList: action.payload,
            };
        case INSERT_TO_RATING_LIST:
            const newMovie = action.payload;
            return { 
                ...state,
                ratingMovieList: [...state.ratingMovieList, newMovie] }
        case UPDATE_RATING_LIST:
            return {
                ...state,
                ratingMovieList: action.payload,
            };
        case UPDATE_FAV_MOVIE_LIST:
            return {
                ...state,
                favouriteMovieList: action.payload,
            };
        case UPDATE_FILTERED_FAV_MOVIE_LIST:
            return {
                ...state,
                filltedFavouriteMovieList: action.payload,
            };
        case ADD_FAVOURITE_MOVIE:
            const newFavouriteMovie = action.payload;
            return {
                ...state,
                favouriteMovieList: [...state.favouriteMovieList, newFavouriteMovie]
            }
        case REMOVE_FAVOURITE_MOVIE:
            return {
                ...state,
                favouriteMovieList: action.payload,
            };
        default:
            return state;
    }
};
