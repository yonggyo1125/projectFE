import React, { useState, useCallback } from 'react';
import JoinForm from '../../components/member/JoinForm';
const JoinContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChange = useCallback(() => {}, []);

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(JoinContainer);
