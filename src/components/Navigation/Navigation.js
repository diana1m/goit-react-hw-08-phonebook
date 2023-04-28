import { useAuth } from 'hooks';
import { NavLinkStyled, NavigationWrapper } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationWrapper>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          Contacts
        </NavLinkStyled>
      )}
    </NavigationWrapper>
  );
};
