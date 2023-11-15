import LoginContainer from '../../../containers/member/LoginContainer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <LoginContainer />
    </>
  );
};

export default Login;
