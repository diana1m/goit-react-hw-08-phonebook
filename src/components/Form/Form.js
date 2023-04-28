import { Formik } from 'formik';
import * as yup from 'yup';  
import 'yup-phone';
import {Form, ErrorFormik, Button, InputStyled} from './Form.styled';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';


const phoneRegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const Schema = yup.object().shape({
    name: yup.string("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),
    number: yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please, enter phone number'),
  });

export const ContactsForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    return(
        <Formik 
        initialValues={{ contacts: [], name: '', number: '' }}
        validationSchema = {Schema}
        
        onSubmit={(values, actions) => {
          if(contacts.find(contact => contact.name === values.name)){
            return alert(`${values.name} is already in contacts!`)
          }
          const contact = {
            name: values.name,
            number: values.number,
          }
          dispatch(addContact(contact));
          actions.resetForm()
        }}
        >
          <Form>
              <label htmlFor="name">Name</label>
              <InputStyled name="name" type="text"/>
              <ErrorFormik name="name" component="span"/>
          
              <label htmlFor="number">Number</label>
              <InputStyled name="number" type="tel" />
              <ErrorFormik name="number" component="span" />
            
            

            <Button type="submit" >Add contact</Button>
          </Form>
        </Formik>
    )
}
