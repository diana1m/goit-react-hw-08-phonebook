import styled from "styled-components";
import { Form as FormikForm, ErrorMessage, Field } from 'formik';

export const Form = styled(FormikForm)`
    width: 710px;
    padding: 40px;
    margin-bottom: 30px;
    border: 1px solid #000000;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InputStyled = styled(Field)`
    height: 60px;
    background-color: #ECECEC;
    border-radius: 12px;
    border: none;
    padding: 10px;
    margin-bottom: 24px;
`

export const ErrorFormik = styled(ErrorMessage)`
    color: #be1212;
    font-style: italic;
    font-size: 20px;
    margin-bottom: 24px;
`;

export const Button = styled.button`
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 80px;
    gap: 10px;

    width: 313px;
    height: 61px;

    background-color: #383886;
    border-radius: 12px;
    border: none;
    color: #ECECEC;
    cursor: pointer;
`