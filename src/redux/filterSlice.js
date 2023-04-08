import { createSlice } from "@reduxjs/toolkit";





const filterSlice = createSlice({
    name: "filter",
    initialState: "",

    reducers: {
        filterContact(state, action) {
            // console.log(action.payload)
            return  action.payload;
        }
    }
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilterState = (state) => state.filter;