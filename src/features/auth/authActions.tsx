import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@env';
import { User } from './authSlice';
import { createHeader } from '../../utils/api';
import { ApplicationState } from '../../store';

type CustomError = {
  error: string;
};

export type SignUpResponse = {
  data: {
    token: string;
    user: User;
  };
};
export type SignInResponse = {
  data: {
    token: string;
    user: User;
  };
};
export type SignUpAttriburte = Pick<User, 'name' | 'email' | 'ssn'> & {
  password: string;
};
export type SignInAttribute = Pick<User, 'email'> & {
  password: string;
};
export type UserUpdateAttribute = Omit<Partial<User>, 'id'>;
export type PostSignUpAttribute = Omit<Partial<User>, 'id'>;

export const registerUser = createAsyncThunk<
  SignUpResponse,
  SignUpAttriburte,
  { rejectValue: CustomError }
>('auth/register', async (user, thunkApi) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.status !== 200) {
      if (data.error) {
        return thunkApi.rejectWithValue({ error: data.error.message });
      }
      // validataions errors from backend
      if (data.errors) {
        return thunkApi.rejectWithValue({ error: 'Invalid Data Try Again' });
      }
    }
    return data;
  } catch (error) {
    console.log('reg user error', error);
    return thunkApi.rejectWithValue({
      error: 'Authentication Error',
    } as CustomError);
  }
});

export const postSignUp = createAsyncThunk<
  { data: User },
  PostSignUpAttribute,
  { rejectValue: CustomError; state: ApplicationState }
>('auth/postSignUp', async (additionalDetails, thunkApi) => {
  const data = JSON.stringify(additionalDetails);
  const response = await fetch(`${API_URL}/api/user/postsignup`, {
    method: 'POST',
    headers: createHeader(thunkApi.getState().auth.token as string),
    body: data,
  });
  if (response.status !== 200) {
    const error = (await response.json()).error.message;
    if (error) {
      return thunkApi.rejectWithValue({ error });
    }
  }
  return await response.json();
});

export const signInUser = createAsyncThunk<
  SignInResponse,
  SignInAttribute,
  { rejectValue: CustomError }
>('auth/signIn', async (user, thunkApi) => {
  console.log(user, JSON.stringify(user));

  const response = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  if (response.status !== 200) {
    if (data.error) {
      return thunkApi.rejectWithValue({ error: data.error.message });
    }
    // validataions errors from backend
    if (data.errors) {
      return thunkApi.rejectWithValue({ error: 'Invalid Data Try Again' });
    }
  }
  return data;
});

export const updateUser = createAsyncThunk<
  { data: User },
  UserUpdateAttribute,
  { rejectValue: CustomError; state: ApplicationState }
>('user/update', async (user, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  if (!token) return;
  const response = await fetch(`${API_URL}/api/user`, {
    method: 'PUT',
    headers: createHeader(token),
    body: JSON.stringify(user),
  });

  if (response.status !== 200) {
    const error = (await response.json()).error.message;
    if (error) {
      return thunkApi.rejectWithValue({ error });
    }
  }
  return await response.json();
});
