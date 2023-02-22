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
    username: string | undefined;
    _id: string;
  } | null;
  userEdited: { name: string; bio: string };
  updateAvatar: string;
}

const initialState: CurrentUserType = {
  currentUser: null,
  userEdited: { name: '', bio: '' },
  updateAvatar: '',
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: state => {
      state.currentUser = null;
      cookie.remove('token');
    },
    editUser(state, action) {
      state.userEdited = action.payload;
    },
    updateAvatar(state, action) {
      state.updateAvatar = action.payload;
    },
  },
});

export const { setCurrentUser, logOut, editUser, updateAvatar } =
  userSlice.actions;
export default userSlice.reducer;
