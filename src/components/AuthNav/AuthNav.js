
import { NavLinkStyled, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLinkStyled to="/register">
        Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        Log In
      </NavLinkStyled>
    </Wrapper>
  );
};
