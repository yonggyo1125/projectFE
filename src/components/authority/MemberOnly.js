import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../modules/user';

const MemberOnly = ({ children }) => {
  const {
    state: { isLogin },
  } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login', { replace: true });
  }, [isLogin, navigate]);

  return children;
};

export default React.memo(MemberOnly);
