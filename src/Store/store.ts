import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './Slices/posts';

const store = configureStore({
  reducer: PostReducer,
});

export default store;
