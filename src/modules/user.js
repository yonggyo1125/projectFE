import { createContext } from 'react';

const initialState = {
  isLogin: false,
  userInfo: {},
};

const UserContext = createContext(initialState);

export default UserContext;
