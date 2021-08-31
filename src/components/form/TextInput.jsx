import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextInput = ({ id, type = 'text' }) => {
  const { register } = useFormContext();

  return <input className="form__input" id={id} {...register(id)} type={type} />;
};

export default TextInput;
