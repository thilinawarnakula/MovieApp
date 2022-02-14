import {
    UPDATE_MOVIE_LIST
} from '../types';


export const updateMovieList= (list) => ({
    type: UPDATE_MOVIE_LIST,
    payload: list
});

