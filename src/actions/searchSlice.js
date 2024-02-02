import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async action for fetching images 
export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async (imgName) => {
        try {
            const response = await axios.get(
                `https://pixabay.com/api/?key=25850788-198f1932e82eefef8db8d5b36&q=${imgName}&image_type=photo`
            );
            return response.data.hits;
        } catch (error) {
            throw error;
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        loading:false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading =true;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;
