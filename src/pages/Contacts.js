import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/Form/ContactsForm/ContactsForm';
import { getIsLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';



export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader/>}
      <ContactsForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList/>
    </>
  );
}