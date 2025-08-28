import {API_CONFIG} from '../../Utils/config';
import {apiGet} from '../apiService';

export const getStory = async (idx: number) => {
  let story = await apiGet(API_CONFIG.endPoint.story, {
    URL: API_CONFIG.baseURL.stories,
    pathParams: {id: `${idx}.json`},
  });
  return story;
};
