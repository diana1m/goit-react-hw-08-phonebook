import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { InputFilter } from 'components/Filter/Filter.styled';


export const Filter = () => {
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const handleFilter = evt =>{
        dispatch(filterValue(evt.target.value))
    }
    
    return(
        <>
            <label name="filter">Find contact by name</label>
            <InputFilter onChange={handleFilter} value={filter} type="text" name="filter"/>
        </>    
    )
}
