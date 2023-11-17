import { useTranslation } from 'react-i18next';
import { SubTitle } from '../commons/TitleStyle';

const JoinForm = () => {
  const { t } = useTranslation();

  return (
    <form>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <input type="email" name="email" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <input type="password" name="password" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호 확인')}</dt>
        <dd>
          <inputt type="password" name="confirmPassword" />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <input type="text" name="name" />
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <input type="text" name="mobile" />
        </dd>
      </dl>
      <SubTitle align="center" border_width={1} fsize="normal">
        {t('회원가입 약관')}
      </SubTitle>
    </form>
  );
};

export default JoinForm;
