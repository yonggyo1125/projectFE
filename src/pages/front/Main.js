import LoginContainer from '../../containers/member/LoginContainer';
import { UserConsumer } from '../../modules/user';

const Main = () => {
  console.log('Main');
  return (
    <UserConsumer>
      {({ isLogin, userInfo }) =>
        isLogin ? <h1>{userInfo.userNm}</h1> : <LoginContainer />
      }
    </UserConsumer>
  );
};

export default Main;
