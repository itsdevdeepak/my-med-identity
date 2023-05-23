import { createSlice } from '@reduxjs/toolkit';
import {
  postSignUp,
  registerUser,
  signInUser,
  updateUser,
} from './authActions';

export enum Gender {
  MALE = 'MALEs',
  FEMALE = 'FEMALE',
}

export enum BloodGroup {
  A_POSITIVE = 'A_POSITIVE',
  A_NEGATIVE = 'A_NEGATIVE',
  B_POSITIVE = 'B_POSITIVE',
  B_NEGATIVE = 'B_NEGATIVE',
  O_POSITIVE = 'O_POSITIVE',
  O_NEGATIVE = 'O_NEGATIVE',
  AB_POSITIVE = 'AB_POSITIVE',
  AB_NEGATIVE = 'AB_NEGATIVE',
  NA = 'NA',
}

export type User = {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  ssn: string;
  allergies: string[];
  mobileNumber?: string;
  bloodGroup?: BloodGroup;
  height?: string;
  weight?: string;
  gender?: Gender;
};

export enum POST_SIGNUP_STATUS {
  SKIPED = 'SKIPED',
  SUBMITTED = 'SUBMITTED',
  WAITING = 'WAITING',
}

type AuthState = {
  loading: boolean;
  success: boolean;
  user: User | null;
  token: string | null;
  error: string | null;
  postSignUp: POST_SIGNUP_STATUS;
};

const initialState: AuthState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  success: false,
  postSignUp: POST_SIGNUP_STATUS.WAITING,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
    skipPostSignup: (state) => {
      state.postSignUp = POST_SIGNUP_STATUS.SKIPED;
    },
  },
  extraReducers: (builder) => {
    // Sign Up
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error.message || 'Opps Something went Wrong';
      }
    });
    // Sign In
    builder.addCase(signInUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error.message || 'Opps Something went Wrong';
      }
    });
    // Post Signup
    builder.addCase(postSignUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postSignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload.data;
      state.postSignUp = POST_SIGNUP_STATUS.SUBMITTED;
    });
    builder.addCase(postSignUp.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error.message || 'Opps Something went Wrong';
      }
    });
    // Update User
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload.data;
    });
  },
});

export const { logOut, skipPostSignup } = authSlice.actions;

export default authSlice.reducer;
