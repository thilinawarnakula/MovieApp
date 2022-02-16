import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    View
} from 'react-native';

import { connect, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import useLoaderHook from '../../customHooks/useLoaderHook';

import MainListView from '../../components/mainListView/index.component';

import {
    MOVIE_LISTS
} from '../../utilities/constants';
import styles from './index.styles';
import { SCREEN_HEADER_NAME } from '../../utilities/strings';
import {
    getMovieData
} from './index.controller';

import ListMenu from '../../components/listMenu/index.component';
import Loader from '../../components/loader/index.component';
import PageHeader from '../../components/pageHeader/index.component';

const MovieListPage = (props) => {

    const {
        movieList,
        navigation
    } = props;

    const [listType, setListType] = useState(MOVIE_LISTS.MOVIES_IN_GRID);
    const [isLoading,setLoadingValue] = useLoaderHook(false);

    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        setListType(MOVIE_LISTS.MOVIES_IN_GRID);
        loadData();
    }, []);

    const loadData = () => {
        setLoadingValue(true);
        fetchData()
    };

    const fetchData = () => {
        getMovieData(
            dispatch,
            getMovieDataSuccess,
            getMovieDataError,
        );
    };
    
    const getMovieDataSuccess = () => {
        setLoadingValue(false);
    };

    const getMovieDataError = () => {
        setLoadingValue(false);
    };

    const onPressListItem = (selectedListType) => {
        setListType(selectedListType);
        loadData();
    };
    
    const renderMovieListSelection = () => (
        <ListMenu
            listType={listType}
            onPressList={onPressListItem}
        />
    );

    const renderItem = ({ item, index }) => {
        return (
            <MainListView
                key={item?.uuid}
                playListTitle={item?.playListTitle}
                playListItems={item?.playListItems}
                listType={listType}
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

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    const renderPageHeader = () => (
        <PageHeader isFavIcon={false} showBackIcon={false} title={SCREEN_HEADER_NAME}  />
    );

    return (
        <SafeAreaView style={!isLoading ? styles.mainContainer : [styles.mainContainer,styles.loaderContainer]}>
            {!isLoading && renderPageHeader()}
            {!isLoading && renderMovieListSelection()}
            {!isLoading && renderFlatListContainer()}
            {renderFullLoadingIndicator()}
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    movieList: state.movies.movieList,
});

export default connect(mapStateToProps)(MovieListPage);