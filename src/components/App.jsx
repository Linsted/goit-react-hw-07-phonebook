
import { Contacts } from "./Contacts/Contacts"
import { FilterContacts } from "./FilterContacts/FilterContacts"
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { Section } from "./App.styled"
import { getContactsFromState,getIsLoading, getError } from "redux/contactsSlice";
import { getFilterState } from "redux/filterSlice";
import { fetchContacts } from "redux/operations";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const App = () => {

   const dispatch = useDispatch();
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector(getFilterState); 
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  



  const normalizedRequest = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedRequest));


  
    return (
      <Section>
        <h1>Phonebook</h1>
        
        < PhonebookForm  />
        <h2>Contacts</h2>
        < FilterContacts
          filter={filter}
        />
        {isLoading && !error && <b>Request in progress...</b>}
        < Contacts
          contacts={filteredContacts}
          
           />
      
      </Section>
  )
};
