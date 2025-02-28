// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable @typescript-eslint/no-restricted-imports */
import type { TypedUseSelectorHook} from "react-redux";
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Типизированный хук для `dispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Типизированный хук для `selector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
