import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,

    reducers: {
        addContact(state, action) {
            console.log(state)
            const existingContact = state.find(contact => contact.name === action.payload.name);
            if (existingContact) {
                alert(`${action.payload.name} is already in your list`);
                return state;
            }
            return [...state, action.payload];
        },

        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
            
        }
        
    }
});

export const { addContact,deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContactsFromState = (state) => state.contacts;