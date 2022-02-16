import api from '../../services/api';

import {
  updateMovieList
} from '../../redux/actions/movieAction';

import { CHANNEL_ID,MAX_ITEMS } from '../../utilities/constants';

export const getMovieData = async (
    dispatch,
    getMovieDataSuccess,
    getMovieDataError,
) => {
  try {
    let movieList = [];
    const responsePlayLists = await api.get(`/playlists`,{
      params : {
        channelId : CHANNEL_ID
      }
    });
    console.log("getMovieListSuccess play lists -- : Success");
    let playListData = responsePlayLists.data.items;
    for(let i=0 ; i < playListData.length ; i++){
      let playListTitle = playListData?.[i]?.snippet?.title;
      let playListId = playListData?.[i]?.id;
      const responsePlayListsItem = await api.get(`/playlistItems`,{
        params : {
          channelId : CHANNEL_ID,
          maxResults : MAX_ITEMS,
          playlistId : playListId
        }
      });
      console.log("getMovieListSuccess play list items -- : Success");
      let playListItems = responsePlayListsItem.data.items;
      movieList.push({
        playListTitle,
        playListItems,
        uuid : Date.now().toString()
      })
    }
    dispatch(updateMovieList(movieList));
    getMovieDataSuccess();
  } catch (error) {
    console.error("getMovieListError ERROR -- : ",error);
    dispatch(updateMovieList([]));
    getMovieDataError();
  }
};
