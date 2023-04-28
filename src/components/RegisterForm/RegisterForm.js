import { Form, InputStyled, Button } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik 
      onSubmit={handleSubmit} 
      initialValues={{ name: '', email: '', password: '' }}
      >
      <Form   autoComplete="off">
        <label htmlFor="name">Username</label>
        <InputStyled type="text" name="name" />
        <label htmlFor="email">Email</label>
        <InputStyled type="email" name="email" />
        <label htmlFor="password">Password</label>
        <InputStyled type="password" name="password" />
        <Button type="submit">Register</Button>
      </Form>
    </Formik> 
  );
};