import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




axios.defaults.baseURL = "https://64326724d0127730d2d1c0e5.mockapi.io";



 




export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
    async (_, thunkAPI) => {
      
    try {
        const response = await axios.get("/contacts");
        // console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);




export const addContact = createAsyncThunk(
  "contacts/addContact",
    async ({phone, name}, thunkAPI) => {
      

      // const contacts = await useSelector(getContactsFromState);

        // console.log(phone, name)
    try {
      const response = await axios.post("/contacts", { phone, name });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
    async (id, thunkAPI) => {
      
    try {
        const response = await axios.delete(`/contacts/${id}`);
        console.log(response)
      return response.data;
    } catch (e) {
        console.log(e.message)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
