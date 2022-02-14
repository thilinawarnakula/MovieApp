import {
    UPDATE_MOVIE_LIST
} from '../types';

const INITIAL_STATE = {
    movieList : [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_MOVIE_LIST:
            return {
                ...state,
                movieList: action.payload,
            };
        default:
            return state;
    }
};
