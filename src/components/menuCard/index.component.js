import React from 'react';
import { TouchableOpacity, Image ,Text,View} from 'react-native';
import styles from './index.styles';

import { MOVIE_LISTS } from '../../utilities/constants';

import CustomTextView from '../customTextView/index.component';
import CustomIcon from '../customIcon/index.component';

const MenuCard = (props) => {

    const {
        key,
        videoName,
        videoImage,
        onPress,
        index,
        listType
    } = props;

    return (
        <View style={listType == MOVIE_LISTS.MOVIES_IN_GRID ? styles.cardGrid : styles.cardList}>
            <CustomIcon containerStyle={styles.image} iconName={{ uri: videoImage }} />
            <View style={styles.detailsContainer}>
                <CustomTextView
                    textValue={videoName}
                    numberOfLines={3}
                    textStyle={styles.title}>
                </CustomTextView>
            </View>
        </View>
    );
};

export default MenuCard;
