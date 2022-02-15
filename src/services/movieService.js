import { 
    insertToRatingList,
    updateRatingList,
    addFavouriteMovie,
    removeFavouriteMovie
 } from '../redux/actions/movieAction';

export const filterItems = (dataList,searchText) => {
    const filteredData = dataList.filter((item) => {

        const itemData = item?.snippet?.title
            ? item?.snippet?.title.toLowerCase()
            : ''.toUpperCase();
        const textData = searchText.toLowerCase();
        return itemData.indexOf(textData) > -1;
    });
    return filteredData;
}

export const handleStarRating =  (videoItem,ratingMovieList,ratingValue,dispatch) => {
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
};

export const getRatingValue = (ratingMovieList,videoId) => {
    return ratingMovieList.find(data => data.videoId === videoId);
};

export const getFavouriteStatus = (favouriteMovieList,videoId) => {
    return favouriteMovieList.find(data => data.videoId === videoId);
};

export const handleFavouriteStatus =  (videoItem,favouriteMovieList,favouriteStatus,dispatch) => {
    let videoId = videoItem?.snippet?.resourceId?.videoId;
    const indexToUpdate = favouriteMovieList.findIndex(data => data.videoId === videoId);
    if (indexToUpdate < 0 ) {
        // insert to the rating movies
        let newMovieRate = {}
        newMovieRate.videoId = videoId;
        newMovieRate.isFavourite = favouriteStatus;
        newMovieRate.videoItem = videoItem
        dispatch(addFavouriteMovie(newMovieRate));
    } else {
         // updating the rating value
         favouriteMovieList.splice(indexToUpdate, 1);
         dispatch(removeFavouriteMovie(favouriteMovieList));        
    }
};

