
import { Contacts } from "./Contacts/Contacts"
import { FilterContacts } from "./FilterContacts/FilterContacts"
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { Section } from "./App.styled"
import { getContactsFromState } from "redux/contactsSlice";
import { getFilterState } from "redux/filterSlice";


import { useSelector } from "react-redux";

export const App = () => {
  
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector(getFilterState);



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
        < Contacts
          contacts={filteredContacts}
          
           />
      
      </Section>
  )
};
