import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	object: {
		name: "EMIL",
		numOfPhotos: 0
	}
}

export const directorySlice = createSlice({
	name: 'object',
	initialState,
	reducers: {
		changeDirectory: (state, action) => {
			state.object = action.payload;
		}
	}
});

export const { changeDirectory } = directorySlice.actions;

export default directorySlice.reducer;