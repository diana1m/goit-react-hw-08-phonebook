import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 500px;
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
    
    /* width: 80px;
    height: 30px; */

    margin-left: 40px;
    /* margin-right: auto; */
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    text-decoration-line: underline;
    color: #051422;
    border: none;
    background-color: transparent;

    cursor: pointer;
`