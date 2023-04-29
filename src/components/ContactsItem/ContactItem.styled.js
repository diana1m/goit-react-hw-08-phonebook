import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 610px;
    justify-content: space-between;
`

export const Box = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 410px;
`

export const Number = styled.span`
    font-size: 20px;
    line-height: 24px;
    width: 160px;
    color: #333333;

`

export const BtnDelete = styled.button`
    display: block;
    margin-left: 40px;

    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    text-decoration-line: underline;
    color: #051422;
    border: none;
    background-color: transparent;

    cursor: pointer;

    transition: scale 300ms ease;

    &:hover{
        text-decoration: none;
        scale: 1.2;
    }
`