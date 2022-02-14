import React from 'react';
import { Image } from 'react-native';
import styles from './index.styles';

const CustomIcon = (props) => {

    const {
        iconName,
        containerStyle,
        resizeMode = 'cover'
    } = props;

    return (
        <Image
            source={iconName}
            style={[styles.imageView, containerStyle]}
            resizeMode={resizeMode} />
    );
};

export default CustomIcon;
