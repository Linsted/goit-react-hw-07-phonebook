import PropTypes from 'prop-types';
import { Label } from './FilterContacts.styled';

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';


export const FilterContacts = ({ onFilter, filter }) => {

    const dispatch = useDispatch();



    return (
        <Label> Find contacts by name
            <input type="text" name='filter' onChange={(evt) => {
                // console.log(evt.target.value)
                dispatch(filterContact(evt.target.value))
            }} value={filter} />
        </Label>
    )
};

FilterContacts.propTypes = {
    onFilter: PropTypes.func,
    filter: PropTypes.string.isRequired,
};