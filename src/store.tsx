import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from './features/records/recordsSlice';
import authSlice from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    records: recordsReducer,
    auth: authSlice,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;

export default store;
