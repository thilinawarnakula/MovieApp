import React from 'react';
import { TouchableOpacity,View} from 'react-native';
import styles from './index.styles';

import { MOVIE_LISTS } from '../../utilities/constants';
import { HOME_SCREEN } from '../../navigation/NavigationConstants';

import CustomTextView from '../customTextView/index.component';
import CustomIcon from '../customIcon/index.component';

const MenuCard = (props) => {

    const {
        key,
        videoItem, 
        listType,
        navigation
    } = props;

    const onPressItem = () => {
        navigation.navigate(HOME_SCREEN.DETAILS_PAGE, {
            videoItem
        });
    };

    return (
        <TouchableOpacity onPress={onPressItem} style={listType == MOVIE_LISTS.MOVIES_IN_GRID ? styles.cardGrid : styles.cardList}>
            <CustomIcon containerStyle={styles.image} iconName={{ uri: videoItem?.snippet.thumbnails?.medium?.url }} />
            <View style={styles.detailsContainer}>
                <CustomTextView
                    textValue={videoItem?.snippet?.title}
                    numberOfLines={3}
                    textStyle={styles.title}>
                </CustomTextView>
            </View>
        </TouchableOpacity>
    );
};

export default MenuCard;
