import PropTypes from 'prop-types';
import { ListItem } from './Listitem';
import { List } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const Contacts = ({contacts}) => {
  
     
    const dispatch = useDispatch();
    

    return (
        <div>  
            <List>{contacts.map(contact => <ListItem key={contact.id} contact={contact} onClick={()=>{dispatch(deleteContact(contact.id))}} /> )}</List>
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
   
}