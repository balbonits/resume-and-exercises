// lib/store.ts
"use client";

import { configureStore } from '@reduxjs/toolkit';
import codeReducer from './store/codeSlice';

export const store = configureStore({
  reducer: {
    code: codeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;