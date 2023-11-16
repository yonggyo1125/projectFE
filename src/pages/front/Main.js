import UserContext from '../../modules/user';
import LoginContainer from '../../containers/member/LoginContainer';

const Main = () => {
  console.log('Main');
  return (
    <UserContext.Consumer>
      {({ isLogin }) => (isLogin ? <h1>메인페이지</h1> : <LoginContainer />)}
    </UserContext.Consumer>
  );
};

export default Main;
