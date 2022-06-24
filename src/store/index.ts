import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { taskReudcer } from '@/store/Tasks/reducer';

const rootReducer = combineReducers({ taskReudcer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
