import LoginForm from '../../components/member/LoginForm';
import { UserConsumer } from '../../modules/user';
const LoginContainer = () => {
  return (
    <>
      <UserConsumer>
        {({ actions }) => {
          return (
            <>
              <LoginForm />
            </>
          );
        }}
      </UserConsumer>
    </>
  );
};

export default LoginContainer;
