import LoginContainer from '../../containers/member/LoginContainer';
import { UserConsumer } from '../../modules/user';

const Main = () => {
  return (
    <UserConsumer>
      {({ state, action }) =>
        state.isLogin ? (
          <h1>메인페이지... / {state.userInfo.userNm}</h1>
        ) : (
          <>
            <LoginContainer />
            <button
              type="button"
              onClick={() => {
                const { setIsLogin, setUserInfo } = action;
                setIsLogin(true);
                setUserInfo({ userNm: '이이름' });
              }}
            >
              로그인하기
            </button>
          </>
        )
      }
    </UserConsumer>
  );
};

export default Main;
