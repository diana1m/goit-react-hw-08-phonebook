import { Form, InputStyled, Button } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
// import { useAuth } from 'hooks';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const { error } = useAuth();

  const handleSubmit = (values, actions) => {
    // if (error) {
    //   toast.error(`registration error`);
    // }
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
    }))
    .unwrap()
    .then(() => {
      // handle result here
    })
    .catch(() => {
      toast.error(`registration error`);
    });

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
