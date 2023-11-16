import LoginContainer from '../../containers/member/LoginContainer';
import { UserConsumer } from '../../modules/user';

const Main = () => {
  console.log('Main');
  return (
    <UserConsumer>
      {({ state, actions }) =>
        state.isLogin ? (
          <h1>{state.userInfo.userNm}</h1>
        ) : (
          <LoginContainer
            setIsLogin={actions.setIsLogin}
            setUserInfo={actions.setUserInfo}
          />
        )
      }
    </UserConsumer>
  );
};

export default Main;
