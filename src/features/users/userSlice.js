
// initial state

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: "",
}

// async thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';
        const response = await axios.get(apiEndpoint);
        console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.users = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }

})

export default userSlice.reducer;
