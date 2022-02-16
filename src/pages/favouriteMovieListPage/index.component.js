import React, {useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { debounce } from 'lodash';
import { memoize } from 'lodash/fp';

import styles from './index.styles';

import useSearchInputHook from '../../customHooks/useSearchInputHook';
import useLoaderHook from '../../customHooks/useLoaderHook';

import CustomInput from '../../components/customInput/index.component';
import PageHeader from '../../components/pageHeader/index.component';
import MenuCard from '../../components/menuCard/index.component';
import NoResults from '../../components/noResults/index.component';
import Loader from '../../components/loader/index.component';

import {
    SCREEN_HEADER_NAME,
    NO_RESULT_HEADER,
    NO_RESULT_SUB_HEADER
} 
from '../../utilities/strings';
import { MOVIE_LISTS } from '../../utilities/constants';

import {
    updateFilteredFavouriteMovieList
} from '../../redux/actions/movieAction';

import {
     filterItems
} from '../../services/movieService';

const FavouriteMovieListPage = (props) => {

    const [searchText,onSearchTextChangeValue,clearSearchText] = useSearchInputHook('');
    const [isLoading,setLoadingValue] = useLoaderHook(false);

    const {
        navigation,
        filltedFavouriteMovieList,
        favouriteMovieList
    } = props;

    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFocused) {
            clearSearchText();
            getData();
        }
    }, [isFocused]);

    const getData = () => {
        dispatch(updateFilteredFavouriteMovieList(favouriteMovieList));
    };

    const clearText = () => {
        getData();
        clearSearchText();
    }

    const onTextChange = (text) => {
        setLoadingValue(true);
        onSearchTextChangeValue(text);
        if (text !== '') {
            const func = memoize(
                debounce(() => {
                    searchItem(text);
                }, 300),
            );
            func();
        } else {
            getData();
            setLoadingValue(false);
        }
    };

    const searchItem = (text) => {
        const filteredData = filterItems(favouriteMovieList,text);
        dispatch(updateFilteredFavouriteMovieList(filteredData));
        setLoadingValue(false);
    };

    const renderSearchBarContainer = () => (
        <View style={styles.filterContainer}>
            <CustomInput
                searchText={searchText}
                onChangeText={onTextChange}
                clearText={clearText} />
        </View>
    );

    const renderItem = ({ item, index }) => {
        let videoData = item?.videoItem;
        return (
            <MenuCard
                key={videoData?.id}
                videoItem={videoData}     
                listType={MOVIE_LISTS.MOVIES_IN_LIST}
                navigation={navigation}
            />
        )
    };

    const renderFavouriteMovieList = () => (
        <FlatList
            data={filltedFavouriteMovieList}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listViewContainer}
        />
    );

    const renderNoResultList = () => (
        <NoResults
            headerText={NO_RESULT_HEADER}
            subHeaderText={NO_RESULT_SUB_HEADER} />
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <PageHeader isFavIcon={false} showBackIcon={false} title={SCREEN_HEADER_NAME}  />
            {renderSearchBarContainer()}
            {!isLoading && filltedFavouriteMovieList.length != 0 &&  renderFavouriteMovieList()}
            {!isLoading && filltedFavouriteMovieList.length == 0 &&
                renderNoResultList()
            }
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    filltedFavouriteMovieList: state.movies.filltedFavouriteMovieList,
    favouriteMovieList: state.movies.favouriteMovieList,
});

export default connect(mapStateToProps)(FavouriteMovieListPage);