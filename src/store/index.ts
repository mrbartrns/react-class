import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { taskReudcer } from '@/store/Tasks/reducer';

const rootReducer = combineReducers({ taskReudcer });

export const store = configureStore({ reducer: rootReducer });
