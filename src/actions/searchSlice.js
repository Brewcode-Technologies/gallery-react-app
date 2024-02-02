import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { REACT_APP_PIXABAY_ENDPOINTS, REACT_APP_PIXABAY_API_KEY } = process.env;

// async action for fetching images 
export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async (imgName) => {
        try {
            const response = await axios.get(
                `${REACT_APP_PIXABAY_ENDPOINTS}/?key=${REACT_APP_PIXABAY_API_KEY}&q=${imgName}&image_type=photo`
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
