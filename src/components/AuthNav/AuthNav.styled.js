import styled from "styled-components";
import { NavLink } from "react-router-dom";

// export const Navigation = styled.nav`
//     display: flex;
//     justify-content: center;
//     gap: 20px;
// `

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: azure;
    font-size: 36px;
    font-weight: 700;
    padding: 6px 12px;
    text-transform: uppercase;
    transition-property: color, background-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    &:hover,
    &:focus {
        color: white;
    }
    &.active {
        color: white;
        background-color: #BAD1C2;
        
        border-radius: 4px;
        pointer-events: none;
    }
`;