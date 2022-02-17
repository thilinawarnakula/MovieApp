import React,{useState,useEffect} from 'react';
import { SafeAreaView,Dimensions,View} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import {TabBar, TabView} from 'react-native-tab-view';

import useLoaderHook from '../../customHooks/useLoaderHook';

import PageHeader from '../../components/pageHeader/index.component';
import Loader from '../../components/loader/index.component';

import styles from './index.styles';
import {
    getMovieData
} from './index.controller';

import { SCREEN_HEADER_NAME } from '../../utilities/strings';
import {MAIN_TAB_NAMES, MAIN_TAB_ROUTES, MOVIE_LISTS} from '../../utilities/constants';
import TabLabel from '../../components/tabLabel/index.component';
import MovieListPage from '../movieListPage/index.component';

const initialLayout = {width: Dimensions.get('window').width};

const HomePage = (props) => {

    const {
        movieList,
        navigation
    } = props;

    const [isLoading,setLoadingValue] = useLoaderHook(false);
    const [index, setIndex] = useState(MOVIE_LISTS.MOVIES_IN_GRID);
    
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        setIndex(0);
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

    const renderMovieList = () => (
        <MovieListPage
        mainTabIndex={index}
        movieList={movieList}
        navigation={navigation}
    />
     );

    const renderScene = ({ route }) => {
        switch (route.key) {
            case MAIN_TAB_NAMES.GRID:
            case MAIN_TAB_NAMES.LIST:
                return renderMovieList()
            default:
                return null;
        }
    };

    const renderLabel = ({ route, focused, color }) => (
       <TabLabel route={route} focused={focused}/>
    );

    const renderTabBar = (props) => (
        <View style={styles.tabBarContainer}>
            <TabBar
                {...props}
                indicatorStyle={styles.indicatorStyle}
                style={styles.tabStyle}
                renderLabel={renderLabel}
            />
        </View>
    );

    const renderTabView = () => (
        <TabView
            swipeEnabled={true}
            navigationState={{ index, routes: MAIN_TAB_ROUTES }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />
    );

    const renderPageHeader = () => (
        <PageHeader isFavIcon={false} showBackIcon={false} title={SCREEN_HEADER_NAME}  />
    );

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    return (
        <SafeAreaView style={!isLoading ? styles.mainContainer : [styles.mainContainer, styles.loaderContainer]}>
            {!isLoading && renderPageHeader()}
            {!isLoading && renderTabView()}
            {renderFullLoadingIndicator()}
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    movieList: state.movies.movieList,
});

export default connect(mapStateToProps)(HomePage);