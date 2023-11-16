import LoginContainer from '../../containers/member/LoginContainer';
import UserContext from '../../modules/user';

const Main = () => {
  return (
    <UserContext.Consumer>
      {({ isLogin }) => (isLogin ? <h1>메인페이지...</h1> : <LoginContainer />)}
    </UserContext.Consumer>
  );
};

export default Main;
