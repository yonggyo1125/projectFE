import LoginContainer from '../../containers/member/LoginContainer';
import { UserConsumer } from '../../modules/user';

const Main = () => {
  console.log('Main');
  return (
    <UserConsumer>
      {({ isLogin }) => (isLogin ? <h1>메인페이지</h1> : <LoginContainer />)}
    </UserConsumer>
  );
};

export default Main;
