import PropTypes from 'prop-types';
import { Item, BtnDelete, Box, Number } from './ContactItem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';

export const ContactsItem = ({id, name, number}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return(
        <Item>
            <Box>
                <p>{name}: </p>
                <Number>{number} </Number>
            </Box>
            
            <BtnDelete onClick={handleDelete}>Delete</BtnDelete>
        </Item>
    )
}

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}