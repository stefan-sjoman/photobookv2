import { configureStore } from '@reduxjs/toolkit';
import directoryReducer from './directorySlice';
import photoReducer from './photoSlice';

export const store = configureStore({
  reducer: {
		directory: directoryReducer,
		photo: photoReducer,
	},
})