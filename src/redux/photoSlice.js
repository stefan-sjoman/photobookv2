import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	source: null
}

export const photoSlice = createSlice({
	name: 'source',
	initialState,
	reducers: {
		changePhoto: (state, action) => {
			state.source = action.payload;
		}
	}
});

export const { changePhoto } = photoSlice.actions;

export default photoSlice.reducer;