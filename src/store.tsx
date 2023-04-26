import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from './features/records/recordsSlice';
import userSlice from './features/user/userSlice';

const store = configureStore({
  reducer: {
    records: recordsReducer,
    user: userSlice,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;

export default store;
