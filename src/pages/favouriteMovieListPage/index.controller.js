import api from '../../services/api';

import { CHANNEL_ID,MAX_ITEMS } from '../../utilities/constants';

export const getMovieData = async (
    getMovieDataSuccess,
    getMovieDataError,
) => {
  try {
    const responsePlayListsItem = await api.get(`/playlistItems`,{
        params : {
          channelId : CHANNEL_ID,
          maxResults : MAX_ITEMS,
          playlistId : 'PLHImblkOoJNFZjExs3u91LaK49xn2zXGs'
        }
      });
    getMovieDataSuccess(responsePlayListsItem);
  } catch (error) {
    console.error("getMovieListError ERROR -- : ",error);
    getMovieDataError();
  }
};
