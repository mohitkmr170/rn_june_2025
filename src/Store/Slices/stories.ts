import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getTopStories} from '../../API/Stories/getTopStoies';
import {getStory} from '../../API/Stories/getStory';

export const fetchTopStories = createAsyncThunk(
  'stories/getTopStories',
  async (params, thunkAPI) => {
    try {
      let resTopStories = await getTopStories();
      return resTopStories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchStory = createAsyncThunk(
  'story/getStory',
  async (params, thunkAPI) => {
    try {
      let storyRes = await getStory(Number(params));
      return storyRes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

interface IStorySlice {
  stories: {
    data: any[];
    loading: boolean;
    error: string | null | any;
  };
  story: {
    data: any;
    loading: boolean;
    error: string | null | any;
  };
}

const initialState: IStorySlice = {
  stories: {
    data: [],
    loading: false,
    error: null,
  },
  story: {
    data: [],
    loading: false,
    error: null,
  },
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTopStories.pending, state => {
        state.stories.loading = true;
        state.stories.error = false;
      })
      .addCase(fetchTopStories.fulfilled, (state, action) => {
        state.stories.loading = false;
        state.stories.data = action.payload;
      })
      .addCase(fetchTopStories.rejected, (state, action) => {
        state.stories.loading = false;
        state.stories.error = action.payload as string;
      })
      .addCase(fetchStory.pending, state => {
        state.story.loading = true;
        state.story.error = false;
      })
      .addCase(fetchStory.fulfilled, (state, action) => {
        state.story.loading = false;
        state.story.data = action.payload;
      })
      .addCase(fetchStory.rejected, (state, action) => {
        state.story.loading = false;
        state.story.error = action.payload as string;
      });
  },
});

export default storySlice.reducer;
