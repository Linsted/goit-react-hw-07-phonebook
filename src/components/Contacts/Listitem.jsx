import PropTypes from 'prop-types';
import { Item } from './ListItem.styled';
import { Button } from './ListItem.styled';

export const ListItem = ({ contact : {name, phone, id}, onClick }) => {
    
    
    return (
        <Item>
            <span>{name}</span>
            <span>{phone}</span>
            <Button type='button' onClick={()=>onClick(id)}>Delete</Button>
        </Item>
    )
}

ListItem.propTypes = {
contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,}).isRequired,
onClick: PropTypes.func.isRequired,
}