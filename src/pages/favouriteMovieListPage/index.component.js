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

import {
    getMovieData
} from './index.controller';
import styles from './index.styles';

import useSearchInputHook from '../../customHooks/useSearchInputHook';
import useLoaderHook from '../../customHooks/useLoaderHook';

import CustomInput from '../../components/customInput/index.component';
import PageHeader from '../../components/pageHeader/index.component';
import MenuCard from '../../components/menuCard/index.component';
import NoResults from '../../components/noResults/index.component';
import Loader from '../../components/loader/index.component';

import { SEARCH_TEXT_INPUT_HEADER, 
    SEARCH_TEXT_PlACE_HOLDER_INPUT_NAME,
    FAV_SCREEN_HEADER,
    NO_RESULT_HEADER,
    NO_RESULT_SUB_HEADER
} 
from '../../utilities/strings';
import { MOVIE_LISTS } from '../../utilities/constants';

import {
    updateFavouriteMovieList,
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
            fetchData();
        }
    }, [isFocused]);

    const fetchData = () => {
        setLoadingValue(true);
        getMovieData(
            getMovieDataSuccess,
            getMovieDataError,
        );
    };
    
    const getMovieDataSuccess = (movieList) => {
        let playListItems = movieList.data.items;
        dispatch(updateFavouriteMovieList(playListItems));
        dispatch(updateFilteredFavouriteMovieList(playListItems));
        setLoadingValue(false);
    };

    const getMovieDataError = () => {
        dispatch(updateFavouriteMovieList([]));
        dispatch(updateFilteredFavouriteMovieList([]));
        setLoadingValue(false);
    };

    const clearText = () => {
        fetchData();
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
            fetchData();
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
                clearText={clearText}
                textInputName={SEARCH_TEXT_INPUT_HEADER}
                placeholderName={SEARCH_TEXT_PlACE_HOLDER_INPUT_NAME} />
        </View>
    );

    const renderItem = ({ item, index }) => {
        return (
            <MenuCard
                key={item?.id}
                videoItem={item}     
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

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    const renderNoResultList = () => (
        <NoResults
            headerText={NO_RESULT_HEADER}
            subHeaderText={NO_RESULT_SUB_HEADER} />
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <PageHeader isFavIcon={false} showBackIcon={false} title={FAV_SCREEN_HEADER}  />
            {renderSearchBarContainer()}
            {!isLoading && filltedFavouriteMovieList.length != 0 &&  renderFavouriteMovieList()}
            <View style={styles.loadingContainer}>
                {isLoading &&
                    renderFullLoadingIndicator()
                }
            </View>
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