import React from 'react';
import {
     View,
     FlatList
} from 'react-native';
import { MOVIE_LISTS } from '../../utilities/constants';

import CustomTextView from '../customTextView/index.component';
import GridCard from '../gridCard/index.component';

import { HOME_SCREEN } from '../../navigation/NavigationConstants';

import styles from './index.styles';

const MainListView = (props) => {

    const {
        key,
        playListTitle,
        playListItems,
        listType,
        index
    } = props;

    const onPressItem = (item) => {
        navigation.navigate(HOME_SCREEN.DETAILS_PAGE, {
            item
        });
    };

    const renderItemGrid = ({ item, index }) => {
        return (
            <GridCard
                key={item?.id}
                videoName={item?.snippet?.title}
                videoImage={item?.snippet.thumbnails?.default?.url}
                onPress={() => onPressItem(item)}
                index={index}
            />
        )
    };

    const renderItemList = ({ item, index }) => {
        return (
            <GridCard
                key={item?.id}
                videoName={item?.snippet?.title}
                videoImage={item?.snippet.thumbnails?.default?.url}
                onPress={() => onPressItem(item)}
                index={index}
            />
        )
    };

    const renderVideoListContainer = () => (
        <FlatList
            data={playListItems}
            renderItem={listType == MOVIE_LISTS.MOVIES_IN_GRID ? renderItemGrid : renderItemGrid}
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
