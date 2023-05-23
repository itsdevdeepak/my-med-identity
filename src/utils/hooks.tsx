import {
  type TypedUseSelectorHook,
  useSelector,
  useDispatch,
} from 'react-redux';
import { ApplicationDispatch, ApplicationState } from '../store';
import { useMemo } from 'react';
import { User } from '../features/auth/authSlice';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;

export const useUser = () => {
  const user: User = useAppSelector((state) => state.auth.user) as User;
  return useMemo(() => user, [user]);
};

export const useRecords = () => {
  const records = useAppSelector((state) => state.records.entities);
  const loading = useAppSelector((state) => state.records.loading);
  return useMemo(() => [records, loading] as const, [records, loading]);
};
