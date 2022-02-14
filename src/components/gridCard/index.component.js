import React from 'react';
import { TouchableOpacity, Image ,Text,View} from 'react-native';
import styles from './index.styles';

import CustomTextView from '../customTextView/index.component';
import CustomIcon from '../customIcon/index.component';

const GridCard = (props) => {

    const {
        key,
        videoName,
        videoImage,
        onPress,
        index,
    } = props;

    return (
        <View style={styles.card}>
                <Image style={styles.image} source={{uri:videoImage}} />
                <View style={styles.detailsContainer}>
                    <Text 
                        numberOfLines = {3}
                        ellipsizeMode='tail'
                        style={styles.title}>{videoName}</Text>
                </View>
            </View>
    );
};

export default GridCard;
