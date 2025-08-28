import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './Slices/posts';
import StoryReducer from './Slices/stories';

const store = configureStore({
  reducer: {
    post: PostReducer,
    story: StoryReducer,
  },
});

export default store;
