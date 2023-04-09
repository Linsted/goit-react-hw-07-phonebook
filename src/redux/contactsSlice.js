import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact } from "./operations";
import { deleteContact } from "./operations";


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
  };


  

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,

    extraReducers: {
        
        [fetchContacts.fulfilled](state, action) {state.items = action.payload},
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            console.log(action)
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            const index = state.items.findIndex(
                task => task.id === action.payload.id);
            state.items.splice(index, 1)},
        [deleteContact.rejected]: handleRejected,


    },
});


export const contactsReducer = contactsSlice.reducer;

export const getContactsFromState = (state) => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;