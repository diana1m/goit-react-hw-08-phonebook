import { GlobalStyle } from 'GlobalStyle';
import { Layout } from '../Layout/Layout.styled';
import { ContactsForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

  return (
    <Layout>
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}
      <h1>Phone book</h1>
      <ContactsForm></ContactsForm>
      <h2>Contacts</h2>
      <Filter/> 
      <ContactsList/>
      <GlobalStyle/>
    </Layout>
  );
};
