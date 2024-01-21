import {
	TypedUseSelectorHook,
	useDispatch as reduxUseDispatch,
	useSelector as reduxUseSelector
} from 'react-redux';

import type { RootState, AppDispatch } from '@/state/store';

/**
 * Custom hook for accessing the Redux dispatch function with types.
 * @returns The Redux `dispatch` function with type `AppDispatch`.
 */
export const useAppDispatch: () => AppDispatch = reduxUseDispatch;

/**
 * Custom hook for accessing the Redux state with types.
 * @returns The Redux `useSelector` hook with type `RootState`.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;
