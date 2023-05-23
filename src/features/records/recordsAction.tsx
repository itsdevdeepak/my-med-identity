import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApplicationState } from '../../store';
import { createHeader } from '../../utils/api';
import { API_URL } from '@env';

type CustomError = {
  error: string;
};

export type Record = {
  id: string;
  name: string;
  date: string;
  description: string;
  allergies: string[];
  fileUrl?: string;
};

type createRecordAttribute = Omit<Record, 'id'>;
type updateRecordAttribute = {
  id: Record['id'];
  record: Partial<Omit<Record, 'id'>>;
};
type deleteRecordAttribute = Record['id'];

export const getRecords = createAsyncThunk<
  { data: Record[] },
  void,
  { rejectValue: CustomError; state: ApplicationState }
>('record/fetchRecords', async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  try {
    const response = await fetch(`${API_URL}/api/records`, {
      method: 'GET',
      headers: createHeader(token ?? ''),
    });

    if (response.status !== 200) {
      const error: CustomError = (await response.json()).error;
      if (error) {
        return thunkApi.rejectWithValue(error as CustomError);
      }
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
});

export const getRecord = createAsyncThunk<
  { data: Record },
  { id: Record['id'] },
  { rejectValue: CustomError; state: ApplicationState }
>('record/get', async (id, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  try {
    const response = await fetch(`${API_URL}/api/records/${id}`, {
      method: 'GET',
      headers: createHeader(token ?? ''),
    });
    if (response.status !== 200) {
      const error: CustomError = (await response.json()).error;
      if (error) {
        return thunkApi.rejectWithValue(error as CustomError);
      }
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
});

export const createRecord = createAsyncThunk<
  { data: Record },
  createRecordAttribute,
  { rejectValue: CustomError; state: ApplicationState }
>('records/create', async (record, thunkApi) => {
  try {
    const { token } = thunkApi.getState().auth;
    const response = await fetch(`${API_URL}/api/record`, {
      method: 'POST',
      headers: createHeader(token ?? ''),
      body: JSON.stringify(record),
    });

    if (response.status !== 200) {
      const error: CustomError = (await response.json()).error;
      if (error) {
        return thunkApi.rejectWithValue(error as CustomError);
      }
    }
    return await response.json();
  } catch (error) {
    return thunkApi.rejectWithValue({
      error: 'Invalid Data',
    } as CustomError);
  }
});

export const updateRecord = createAsyncThunk<
  { data: Record },
  updateRecordAttribute,
  { rejectValue: CustomError; state: ApplicationState }
>('records/update', async ({ id, record }, thunkApi) => {
  try {
    const { token } = thunkApi.getState().auth;
    const response = await fetch(`${API_URL}/api/record/${id}`, {
      method: 'PUT',
      headers: createHeader(token ?? ''),
      body: JSON.stringify(record),
    });

    if (response.status !== 200) {
      const error: CustomError = (await response.json()).error;
      if (error) {
        return thunkApi.rejectWithValue(error as CustomError);
      }
    }
    return await response.json();
  } catch (error) {
    return thunkApi.rejectWithValue({
      error: 'Invalid Data',
    } as CustomError);
  }
});

export const removeRecord = createAsyncThunk<
  { data: Record },
  deleteRecordAttribute,
  { rejectValue: CustomError; state: ApplicationState }
>('records/delete', async (id, thunkApi) => {
  try {
    const { token } = thunkApi.getState().auth;
    const response = await fetch(`${API_URL}/api/record/${id}`, {
      method: 'DELETE',
      headers: createHeader(token ?? ''),
    });

    if (response.status !== 200) {
      const error: CustomError = (await response.json()).error;
      if (error) {
        return thunkApi.rejectWithValue(error as CustomError);
      }
    }
    return await response.json();
  } catch (error) {
    return thunkApi.rejectWithValue({
      error: 'Invalid Data',
    } as CustomError);
  }
});
