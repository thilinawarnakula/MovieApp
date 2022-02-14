import {
    SET_MOVIE_LIST
} from '../types';


export const setMovieList = (list) => ({
    type: SET_MOVIE_LIST,
    payload: list
});
