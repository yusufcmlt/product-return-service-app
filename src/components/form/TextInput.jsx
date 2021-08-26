import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextInput = ({ id }) => {
  const { register } = useFormContext();

  return <input className="form__input" id={id} {...register(id)} />;
};

export default TextInput;
