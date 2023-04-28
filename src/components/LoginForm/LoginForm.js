import { Button, Form, InputStyled } from 'components/Form/Form.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = (values, actions) => {
    if (error) {
      toast.error(`login error`);
    }
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm()
  };

  return (
    <Formik onSubmit={handleSubmit} 
    initialValues={{ email: '', password: '' }}
    >
      <Form autoComplete="off">
        <label htmlFor="email">Email</label>
        <InputStyled type="email" name="email" />
        <label htmlFor="name"> Password</label>
        <InputStyled type="password" name="password" />
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};