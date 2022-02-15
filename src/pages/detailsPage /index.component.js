import React, { useEffect, useState } from 'react';
import { SafeAreaView,ScrollView, TouchableOpacity, View ,Linking} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';

import styles from './index.styles';


import PageHeader from '../../components/pageHeader/index.component';
import CustomIcon from '../../components/customIcon/index.component';
import CustomTextView from '../../components/customTextView/index.component';
import MovieRating from '../../components/movieRating/index.component';


import { NO_DESCRIPTION, WATCH_VIDEO } from '../../utilities/strings';
import { OPEN_VIDEO } from '../../utilities/constants';
import { insertToRatingList,updateRatingList } from '../../redux/actions/movieAction';

const profileImageMode = 'contain'

const DetailsPage = (props) => {

    const {
        navigation,
        route,
        ratingMovieList
    } = props;

    const [videoItem, setVideoItem] = useState(null);
    const [videoRating, setVideoRating] = useState(0);
    
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFocused) {
            setVideoItem(route?.params?.videoItem);
            setRatingValue();
        }else{
            setVideoItem(null);
            setVideoRating(0)
        }
    }, [isFocused]);

    const setRatingValue = () => {
        let videoId = route?.params?.videoItem?.snippet?.resourceId?.videoId; 
        let resultVideo = ratingMovieList.find(data => data.videoId === videoId);
        if(resultVideo){
            setVideoRating(resultVideo?.videoRating)
        }
    };

    const onPressBack = () => {
        navigation.goBack();
    };

    const handleFavIcon = () => {
       
    };

    const updateRatingValue = (ratingValue) => {
        let videoId = videoItem?.snippet?.resourceId?.videoId;
        const indexToUpdate = ratingMovieList.findIndex(data => data.videoId === videoId);
        if (indexToUpdate < 0 ) {
            // insert to the rating movies
            let newMovieRate = {}
            newMovieRate.videoId = videoId;
            newMovieRate.videoRating = ratingValue
            dispatch(insertToRatingList(newMovieRate));
        } else {
             // updating the rating value
             let newMovieList = [...ratingMovieList];
             newMovieList[indexToUpdate].videoRating = ratingValue
             dispatch(updateRatingList(newMovieList));
        }
        setVideoRating(ratingValue);
    };

    const handleWatchVideo = () => {
       let videoId = videoItem?.snippet?.resourceId?.videoId; 
       Linking.canOpenURL(videoId).then(supported => {
        if (supported) {
          let videoURL = OPEN_VIDEO +videoId  
          Linking.openURL(videoURL);
        } 
      });
    };

    const renderBannerImage = () => (
        <View>
            <CustomIcon
                iconName={{uri: videoItem?.snippet.thumbnails?.medium?.url}} 
                containerStyle={styles.bannerImage}
            />
            <CustomTextView 
                textValue={videoItem?.snippet?.title || ''} 
                textStyle={styles.videoNameText}/>
        </View>
    );

    const renderProfileImage = () => (
        <View style={styles.metaDataContainer}>
            <CustomIcon
                iconName={{ uri: videoItem?.snippet.thumbnails?.medium?.url }}
                containerStyle={styles.profileImage}
                resizeMode={profileImageMode}
            />
            <View style={styles.ratingContainer}>
                <TouchableOpacity onPress={handleWatchVideo}>
                    <CustomTextView
                        textValue={WATCH_VIDEO}
                        textStyle={styles.watchVideoTitle}
                    />
                </TouchableOpacity>
                <MovieRating ratingValue={videoRating} handleRatingValue={(ratingValue) => updateRatingValue(ratingValue)}/>
            </View>
        </View>
    );

    const renderVideoDetails = () => (
        <View style={styles.videoDetails}>
            <CustomTextView
                textValue={videoItem?.snippet?.description || NO_DESCRIPTION}
                textStyle={styles.title}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContainer}>
            <PageHeader isFavIcon={true} showBackIcon={true} title={videoItem?.snippet?.title} onPress={onPressBack} onPressFavIcon={handleFavIcon}/>
            {renderBannerImage()}
            {renderProfileImage()}
            {renderVideoDetails()}
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    ratingMovieList: state.movies.ratingMovieList,
});

export default connect(mapStateToProps)(DetailsPage);