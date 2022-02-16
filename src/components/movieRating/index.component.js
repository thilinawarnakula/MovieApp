import React from 'react';
import { COLORS } from '../../utilities/colors';
import StarRating from 'react-native-star-rating';
import styles from './index.styles';

const RATING_COUNT = 5;

const MovieRating = (props) => {

    const {
        ratingValue,
        handleRatingValue
    } = props;

    const onFinishRating = (rating) => {
        handleRatingValue(rating)
    };

    return (
        <StarRating
            disabled={false}
            maxStars={RATING_COUNT}
            rating={ratingValue}
            selectedStar={(rating) => onFinishRating(rating)}
            fullStarColor={COLORS.starRed}
            starSize={25}
            buttonStyle={styles.starContainer}
        />
    );
};

export default MovieRating;
