import { createSlice } from '@reduxjs/toolkit';
import {
  Record,
  createRecord,
  getRecords,
  removeRecord,
  updateRecord,
} from './recordsAction';

type RecordsState = {
  entities: Record[];
  loading: boolean;
};

const initialState: RecordsState = {
  entities: [],
  loading: false,
};

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Records
    builder.addCase(getRecords.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecords.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload.data;
    });
    builder.addCase(getRecords.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createRecord.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(action.payload.data);
    });
    builder.addCase(updateRecord.fulfilled, (state, action) => {
      const records = state.entities;
      const recordindex = records.findIndex(
        (record) => record.id === action.payload.data.id
      );
      records[recordindex] = action.payload.data;
      state.entities = records;
    });
    builder.addCase(removeRecord.fulfilled, (state, action) => {
      state.entities = state.entities.filter(
        (record) => record.id !== action.payload.data.id
      );
    });
  },
});

export default recordsSlice.reducer;
