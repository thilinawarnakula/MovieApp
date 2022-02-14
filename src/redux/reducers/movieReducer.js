import {
    SET_MOVIE_LIST,
} from '../types';

const INITIAL_STATE = {
    movieList : false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.payload,
            };
        default:
            return state;
    }
};
