import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts(state, action) {
      state.posts = action.payload;
    },
    getAPost(state, action) {
      const { $id } = action.payload;
      const post = state.posts.find((post) => post.$id === $id);
      return post;
    },
    addAPost(state, action) {
      state.posts.push(action.payload);
    },
    deleteAPost(state, action) {
      const { $id } = action.payload;
      state.posts = state.posts.filter((post) => post.$id !== $id);
    },
    updateAPost(state, action) {
      const { $id } = action.payload;
      const postIndex = state.posts.findIndex((post) => post.$id === $id);
      state.posts[postIndex] = action.payload;
    },
  },
});

export const { setAllPosts, getAPost, addAPost, deleteAPost, updateAPost } =
  postSlice.actions;

export default postSlice.reducer;
