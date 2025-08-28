import {API_CONFIG} from '../../Utils/config';
import {apiGet} from '../apiService';

export const getTopStories = async () => {
  let topStories = await apiGet(API_CONFIG.endPoint.topStories, {
    URL: API_CONFIG.baseURL.stories,
  });
  return topStories;
};
