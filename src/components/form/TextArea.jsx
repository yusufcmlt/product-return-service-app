import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextArea = ({ id }) => {
  const { register } = useFormContext();
  return <textarea className="form__textarea" id={id} {...register(id)} />;
};

export default TextArea;
