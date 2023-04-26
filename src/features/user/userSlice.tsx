import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
  email: string;
  mobileNo: string;
  allergies: string[];
  dob: string;
  bloodGroup: string;
  height: string;
  weight: string;
};

type UserState = User;

const initialState: UserState = {
  id: '',
  name: '',
  allergies: [],
  bloodGroup: '',
  mobileNo: '',
  dob: '',
  email: '',
  height: '',
  weight: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      const updatedUser = { ...state, ...action.payload };
      return updatedUser;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
