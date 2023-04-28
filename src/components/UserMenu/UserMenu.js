import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Text, Wrapper } from './UserMenu.styled';
import {TbLogout} from "react-icons/tb"
 

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={()=>dispatch(logOut())}>
        <TbLogout width='10px'/>
      </Button>
    </Wrapper>
  );
};
