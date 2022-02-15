import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

import styles from './index.styles';
import {
    MOVIE_LISTS
} from '../../utilities/constants';
import { COLORS } from '../../utilities/colors';

import Entypo from 'react-native-vector-icons/Entypo';

const iconSize = 35;
const iconSizeList = 35;

const iconGrid = 'grid';
const iconList = 'list';

const ListMenu = (props) => {

    const {
        listType,
        onPressList
    } = props;

    const handleListClick = (selectedList) => {
        onPressList(selectedList);
    };

    return (
        <View
            style={styles.selectionView}>
            {
                listType == MOVIE_LISTS.MOVIES_IN_GRID ?
                    <TouchableOpacity>
                        <Entypo size={iconSize} name={iconGrid} color={COLORS.primary} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => handleListClick(MOVIE_LISTS.MOVIES_IN_GRID)}>
                        <Entypo size={iconSize} name={iconGrid} color={COLORS.gray1} />
                    </TouchableOpacity>
            }
            {
                listType == MOVIE_LISTS.MOVIES_IN_LIST ?
                    <TouchableOpacity>
                        <Entypo size={iconSizeList} name={iconList} color={COLORS.primary} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => handleListClick(MOVIE_LISTS.MOVIES_IN_LIST)}>
                        <Entypo size={iconSizeList} name={iconList} color={COLORS.gray1} />
                    </TouchableOpacity>
            }
        </View>
    );
};

export default ListMenu;
