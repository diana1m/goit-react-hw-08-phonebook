import { Suspense } from "react";
import { Outlet} from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Container } from "./SharedLayout.styled";
import { AppBar } from "components/AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <main>
        <AppBar/>
      {/* <Header>
        <Container>
          <Navigation>
            <NavLinkStyled to="/" end>  Home </NavLinkStyled>
            <NavLinkStyled to="/movies"> Movies </NavLinkStyled>
          </Navigation>
        </Container>
      </Header> */}
      <Suspense fallback={<Loader/>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </main>
  );
};