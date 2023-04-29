import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    color: #FBFCFB;
`
export const Text = styled.p`
    color: #FBFCFB;
    display: block;
`

export const Button = styled.button`
    color: #FBFCFB;
    width: 44px;
    height: 44px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: scale 200ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus{
        scale: 1.2;
    }
`
