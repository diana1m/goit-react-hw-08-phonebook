import { GlobalStyle } from 'GlobalStyle';
// import { Layout } from '../Layout/Layout.styled';
// import { ContactsForm } from '../Form/Form';
// import { Filter } from '../Filter/Filter';
// import { ContactsList } from '../ContactsList/ContactsList';
// import { Loader } from '../Loader/Loader';
import { useDispatch } from 'react-redux';
// import { getIsLoading, getError } from 'redux/contacts/selectors';
import { useEffect, lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
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
      </Route>
    </Routes>
    <GlobalStyle/>
</>

  );
};
