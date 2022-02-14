
import Api from './Api';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

const apiInstance = new Api(BASE_URL);

export default apiInstance.axios;
