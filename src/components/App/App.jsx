// import { GlobalStyle } from 'GlobalStyle';
// import { Layout } from '../Layout/Layout.styled';
// import { ContactsForm } from '../Form/Form';
// import { Filter } from '../Filter/Filter';
// import { ContactsList } from '../ContactsList/ContactsList';
// import { Loader } from '../Loader/Loader';
import { useDispatch } from 'react-redux';
// import { getIsLoading, getError } from 'redux/contacts/selectors';
import { useEffect, lazy } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

  return (
    <>
    {/* <Layout>
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}
      <h1>Phone book</h1>
      <ContactsForm></ContactsForm>
      <h2>Contacts</h2>
      <Filter/> 
      <ContactsList/>
      <GlobalStyle/>
    </Layout> */}


    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register"  element={ <RegisterPage />}/>
        <Route path="/login" element={ <LoginPage />}/>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route> */}
    </Routes>
</>

  );
};
