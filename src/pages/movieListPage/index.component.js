import React from 'react';
import {
    SafeAreaView,
    FlatList,
} from 'react-native';

import MainListView from '../../components/mainListView/index.component';

import styles from './index.styles';

const MovieListPage = (props) => {

    const {
        mainTabIndex,
        movieList,
        navigation
    } = props;

    const renderItem = ({ item, index }) => {
        return (
            <MainListView
                key={item?.uuid}
                playListTitle={item?.playListTitle}
                playListItems={item?.playListItems}
                listType={mainTabIndex}
                index={index}
                navigation={navigation}

            />
        )
    };

    const renderFlatListContainer = () => (
        <FlatList
            data={movieList}
            renderItem={renderItem}
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.uuid}
            contentContainerStyle={styles.listViewContainer}
        />
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            {renderFlatListContainer()}
        </SafeAreaView>
    )
}

export default MovieListPage;