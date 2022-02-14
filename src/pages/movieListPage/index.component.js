import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    FlatList
} from 'react-native';

import { connect, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import useLoaderHook from '../../customHooks/useLoaderHook';

import MainListView from '../../components/mainListView/index.component';

import {
    MOVIE_LISTS
} from '../../utilities/constants';
import styles from './index.styles';
import {
    getMovieData
} from './index.controller';

import ListMenu from '../../components/listMenu/index.component';

const MovieListPage = (props) => {

    const {
        movieList
    } = props;

    const [listType, setListType] = useState(MOVIE_LISTS.MOVIES_IN_GRID);
    const [isLoading,setLoadingValue] = useLoaderHook(false);

    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFocused) {
            setListType(MOVIE_LISTS.MOVIES_IN_GRID);
            loadData();
        }
    }, [isFocused]);

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
            {renderMovieListSelection()}
            {renderFlatListContainer()}
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    movieList: state.movies.movieList,
});

export default connect(mapStateToProps)(MovieListPage);