import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const token = cookie.get('token');
export interface CurrentUserType {
  currentUser: {
    avatar: string;
    averageScore: number;
    bio: string;
    blogs: {
      _id: string;
    }[];
    createdAt: string;
    name: string;
    updatedAt: string;
    username: string;
    _id: string;
  } | null;
}

const initialState: CurrentUserType = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      cookie.remove('token');
    },
  },
});

export const { setCurrentUser, logOut } = userSlice.actions;
export default userSlice.reducer;
