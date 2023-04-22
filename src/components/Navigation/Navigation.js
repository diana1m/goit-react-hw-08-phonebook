// import { useAuth } from 'hooks';
import { NavLinkStyled } from './Navigation.styled';


export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {/* {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          Contacts
        </NavLinkStyled>
      )} */}
    </nav>
  );
};
