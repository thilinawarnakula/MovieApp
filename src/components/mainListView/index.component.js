import React from 'react';
import {
     View,
     FlatList
} from 'react-native';
import { MOVIE_LISTS } from '../../utilities/constants';

import CustomTextView from '../customTextView/index.component';
import MenuCard from '../menuCard/index.component';

import styles from './index.styles';

const MainListView = (props) => {

    const {
        key,
        playListTitle,
        playListItems,
        listType,
        index,
        navigation
    } = props;

    const renderItem = ({ item, index }) => {
        return (
            <MenuCard
                key={item?.id}
                videoItem={item}     
                listType={listType}
                navigation={navigation}
            />
        )
    };

    const renderVideoListContainer = () => (
        <FlatList
            data={playListItems}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            horizontal={listType == MOVIE_LISTS.MOVIES_IN_GRID ? true : false}
        />
    );

    return (
        <View style={styles.mainContainer}>
             <CustomTextView textValue={playListTitle || ''} textStyle={styles.playListNameText} />
             {renderVideoListContainer()}
        </View>
    );
};

export default MainListView;
