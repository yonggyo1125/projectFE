import React, { useState, useCallback } from 'react';
import LoginForm from '../../components/member/LoginForm';

const LoginContainer = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(form);
    },
    [form],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget;
    setForm((form) => ({
      ...form,
      [target.name]: target.value,
    }));
  }, []);

  return (
    <>
      <LoginForm onChange={onChange} onSubmit={onSubmit} errors={errors} />
    </>
  );
};

export default React.memo(LoginContainer);
