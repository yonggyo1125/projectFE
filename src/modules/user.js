import { createContext } from 'react';

const UserContext = createContext({
  isLogin: false,
  userInfo: {},
});

export default UserContext;
