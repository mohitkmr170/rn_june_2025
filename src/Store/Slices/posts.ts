import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchPosts} from '../../API/fetchPosts';

export const getPosts = createAsyncThunk<any, any>(
  'posts/getPosts',
  async (params, thunkAPI) => {
    try {
      const response = await fetchPosts(params);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : String(error),
      );
    }
  },
);

interface IPostsSlice {
  posts: any[];
  loading: boolean;
  error: string | null | any;
}

const initialState: IPostsSlice = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(...action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;
